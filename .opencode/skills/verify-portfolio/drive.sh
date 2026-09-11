#!/bin/sh
# Drive the served app with headless Chrome: rendered DOM + screenshots.
# Usage: drive.sh [PORT] [OUTDIR]
#
# Chrome is launched detached (own session via launch-chrome.py) because the
# browser process reliably outlives its work: artifacts are written quickly,
# but the process tree lingers for minutes. We poll for the artifacts, then
# SIGKILL the whole session by pgid, so a run never strands processes and the
# caller never waits on Chrome. One invocation captures both DOM and PNG.
set -eu
PORT="${1:-4311}"
OUTDIR="${2:-/tmp/verify-portfolio/${PORT}/evidence}"
RUNDIR="/tmp/verify-portfolio/${PORT}"
SCRIPTDIR="$(dirname "$0")"
mkdir -p "${OUTDIR}" "${RUNDIR}/chrome-profile"
if ! command -v python3 >/dev/null 2>&1; then
  echo "FAIL_NO_PYTHON3 launch-chrome.py needs python3 on PATH"
  exit 1
fi
if [ -n "${CHROME_BIN:-}" ]; then
  CHROME="$CHROME_BIN"
elif [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
elif command -v google-chrome >/dev/null 2>&1; then
  CHROME="$(command -v google-chrome)"
elif command -v chromium >/dev/null 2>&1; then
  CHROME="$(command -v chromium)"
else
  echo "FAIL_NO_CHROME set CHROME_BIN to a Chrome/Chromium binary"
  exit 1
fi
BASE="http://127.0.0.1:${PORT}"

kill_session() {
  python3 -c "import os,signal,sys; os.killpg(int(sys.argv[1]), signal.SIGKILL)" "$1" 2>/dev/null || true
}

capture() {
  name="$1"; url="$2"
  PROFILE="$(mktemp -d "${RUNDIR}/chrome-profile-XXXXXX")"
  DOM="${OUTDIR}/${name}.dom.html"
  PNG="${OUTDIR}/${name}.png"
  LEADER="$(python3 "${SCRIPTDIR}/launch-chrome.py" "${CHROME}" "${PROFILE}" "${DOM}" "${PNG}" "${url}")"
  LAST=-1; STABLE=0; i=0
  while [ "$i" -lt 60 ]; do
    if [ -f "${PNG}" ] && [ -s "${DOM}" ]; then
      SIZE=$(wc -c <"${PNG}" | tr -d ' ')
      if [ "${SIZE}" = "${LAST}" ]; then
        STABLE=$((STABLE + 1))
        if [ "${STABLE}" -ge 2 ]; then break; fi
      else
        STABLE=0; LAST="${SIZE}"
      fi
    fi
    sleep 1
    i=$((i + 1))
  done
  kill_session "${LEADER}"
  pkill -f "user-data-dir=${PROFILE}" 2>/dev/null || true
  rm -rf "${PROFILE}"
  if [ ! -f "${PNG}" ] || [ ! -s "${DOM}" ]; then
    echo "FAIL artifacts missing for ${name} (png or empty dom)"
    return 1
  fi
  echo "captured ${name} <- ${url}"
}
capture root "${BASE}/"
capture about "${BASE}/#about"
capture work "${BASE}/#work"
capture personal "${BASE}/#personal"
capture contact "${BASE}/#contact"
capture 404 "${BASE}/nonexistent-xyz"
ls -la "${OUTDIR}"
