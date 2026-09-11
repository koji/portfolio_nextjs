#!/bin/sh
# Tear down only the instance this run started (via pidfile). Keeps evidence.
# Usage: cleanup.sh [PORT]  (default 4311)
set -eu
PORT="${1:-4311}"
RUNDIR="/tmp/verify-portfolio/${PORT}"
PIDFILE="${RUNDIR}/server.pid"
if [ -f "${PIDFILE}" ]; then
  PID="$(cat "${PIDFILE}")"
  if kill -0 "${PID}" 2>/dev/null; then
    kill "${PID}" 2>/dev/null || true
    i=0
    while kill -0 "${PID}" 2>/dev/null && [ "$i" -lt 20 ]; do
      sleep 0.25
      i=$((i + 1))
    done
    if kill -0 "${PID}" 2>/dev/null; then
      echo "STILL_RUNNING pid ${PID}; refusing to escalate, inspect manually"
      exit 1
    fi
    echo "STOPPED pid ${PID}"
  else
    echo "ALREADY_DEAD stale pid ${PID}"
  fi
  rm -f "${PIDFILE}" "${RUNDIR}/server.log"
else
  echo "NO_PIDFILE nothing started by us on port ${PORT}"
fi
echo "KEPT evidence in ${RUNDIR}/evidence/"
