#!/bin/sh
# Launch an isolated vite preview server for verification.
# Usage: launch.sh [PORT]  (default 4311)
set -eu
PORT="${1:-4311}"
RUNDIR="/tmp/verify-portfolio/${PORT}"
PIDFILE="${RUNDIR}/server.pid"
LOG="${RUNDIR}/server.log"
mkdir -p "${RUNDIR}"
if [ -f "${PIDFILE}" ] && kill -0 "$(cat "${PIDFILE}")" 2>/dev/null; then
  echo "ALREADY_RUNNING http://127.0.0.1:${PORT}/ pid=$(cat "${PIDFILE}")"
  exit 0
fi
cd "$(dirname "$0")/../../../"
# Serve the production build so verification matches what ships.
nohup bunx vite preview --port "${PORT}" --strictPort >"${LOG}" 2>&1 &
echo "$!" >"${PIDFILE}"
i=0
while [ "$i" -lt 40 ]; do
  if curl -sf -o /dev/null "http://127.0.0.1:${PORT}/"; then
    echo "READY http://127.0.0.1:${PORT}/ pid=$(cat "${PIDFILE}")"
    exit 0
  fi
  sleep 0.5
  i=$((i + 1))
done
echo "TIMEOUT server did not answer on ${PORT}; see ${LOG}"
exit 1
