#!/usr/bin/env python3
"""Launch headless Chrome detached: own session, caller never waits on it.

Usage: launch-chrome.py CHROME PROFILE DOMFILE PNGFILE URL
Prints the session-leader pid; kill the whole session afterwards with:
  python3 -c "import os,signal,sys; os.killpg(int(sys.argv[1]), signal.SIGKILL)" PID
"""
import os
import subprocess
import sys

chrome, profile, domfile, shotfile, url = sys.argv[1:6]
dom = open(domfile, "wb")  # noqa: PTH123
p = subprocess.Popen(
    [
        chrome, "--headless", "--disable-gpu", "--no-sandbox",
        "--user-data-dir=" + profile, "--window-size=1280,900",
        "--virtual-time-budget=6000",
        "--dump-dom", "--screenshot=" + shotfile, url,
    ],
    stdin=subprocess.DEVNULL, stdout=dom, stderr=subprocess.DEVNULL,
    start_new_session=True,
)
print(p.pid)
