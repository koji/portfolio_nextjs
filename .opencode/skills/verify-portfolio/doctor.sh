#!/bin/sh
# Read-only health check: is this instance worth driving?
# Usage: doctor.sh [PORT]  (default 4311)
set -eu
PORT="${1:-4311}"
RUNDIR="/tmp/verify-portfolio/${PORT}"
PIDFILE="${RUNDIR}/server.pid"
cd "$(dirname "$0")/../../../"
if [ ! -f dist/index.html ]; then
  echo "FAIL_NOT_BUILT dist/index.html missing; run: bun run build"
  exit 1
fi
if ! curl -sf -o /dev/null "http://127.0.0.1:${PORT}/"; then
  if [ -f "${PIDFILE}" ]; then
    if kill -0 "$(cat "${PIDFILE}")" 2>/dev/null; then
      echo "FAIL_NOT_LISTENING pid $(cat "${PIDFILE}") alive but port ${PORT} not answering"
    else
      echo "FAIL_STALE_PIDFILE pid $(cat "${PIDFILE}") dead and port ${PORT} not answering; run cleanup.sh ${PORT} then launch.sh ${PORT}"
    fi
  else
    echo "FAIL_NOT_LISTENING nothing on port ${PORT}; run launch.sh ${PORT}"
  fi
  exit 1
fi
echo "OK http://127.0.0.1:${PORT}/ serving dist/"
