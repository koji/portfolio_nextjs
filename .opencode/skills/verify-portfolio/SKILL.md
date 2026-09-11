---
name: verify-portfolio
description: Drive and prove the portfolio SPA (React+Vite single-page site) with headless Chrome against a local preview server. Reach for it whenever a change needs real-browser evidence (render, nav, sections, 404) rather than unit tests.
---

# Verify Portfolio

Static single-page portfolio (`src/App.tsx`: `Index` at `/`, `NotFound` at `*`).
No backend, no auth, no seed data. Sections are client-rendered anchor targets:
`#home` (`Hero.tsx`), `#about` (`About.tsx`), `#work` (`WorkProjects.tsx`),
`#personal` (`PersonalProjects.tsx`), `#contact` (`Contact.tsx`).

## Launch

Serves the production build so verification matches what ships.
Build once, then start one preview server per run on an isolated port:

```sh
bun run build
PORT=4311 .opencode/skills/verify-portfolio/launch.sh "$PORT"
```

Ready means: `launch.sh` prints `READY http://127.0.0.1:<PORT>/`
(it polls `curl -sf` on `/` until success, then exits non-zero on timeout).
The server PID is recorded at `/tmp/verify-portfolio/<PORT>/server.pid`.

Isolation: each run uses its own `PORT` (default `4311`; any free port works)
with `--strictPort`, so it never steals another server and two instances can
run side by side. Never assume port 8080 (dev) or 4173 is yours.

Teardown: see Cleanup. Never leave the server running after a run.

## Doctor

Read-only health check. Run first whenever anything looks off:

```sh
.opencode/skills/verify-portfolio/doctor.sh 4311
```

Checks: `dist/index.html` exists (built), something answers
`GET http://127.0.0.1:<PORT>/`, and the pidfile process (if present) is alive.
Exits non-zero with a one-line diagnosis (`NOT_BUILT`, `NOT_LISTENING`,
`STALE_PIDFILE`, or `OK`).

## Drive

Harness is headless Chrome (one invocation per target captures `--dump-dom`
plus `--screenshot`), driven by `drive.sh` + `launch-chrome.py` (needs
`python3`). Chrome is launched detached in its own session: artifacts land in
seconds but the browser tree lingers, so `drive.sh` polls for the files and
then SIGKILLs the whole session by pgid. A run never strands Chrome
processes and never waits on them. `drive.sh` loads the real page in a real
renderer and dumps what a user sees:

```sh
.opencode/skills/verify-portfolio/drive.sh 4311 /tmp/verify-portfolio/4311/evidence
```

It captures, per target (`/`, `/#about`, `/#work`, `/#personal`, `/#contact`,
`/nonexistent-xyz` for the 404 route): rendered DOM (`*.dom.html`) plus a
viewport screenshot (`*.png`). Targets come from the feature map
(`features/`); drive one feature per run unless asked for more.

Assertions are greps over the rendered DOM, not the source bundle, e.g.:

```sh
grep -q 'id="about"' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'Oops! Page not found' /tmp/verify-portfolio/4311/evidence/404.dom.html
```

Stable handles, in order of preference: section ids (`home`, `about`, `work`,
`personal`, `contact`), visible button/link text (`View My Work`,
`Get In Touch`, `Read My Blog`, `Return to Home`), `aria-label`
(`Go to top`), `mailto:` href. Never use coordinates or tab order.

Limits: `--dump-dom` captures post-JS DOM but does not click. Smooth-scroll
nav (`scrollIntoView` in `Navigation.tsx`) is verified by asserting the target
section exists in the rendered DOM and the nav control with matching text
exists — do not claim a scroll was observed unless you watched it in a headed
browser. External links (Blog, GitHub, HuggingFace, `mailto:`) are verified by
href presence only; never open them during verification.

## Evidence

Each run writes to `/tmp/verify-portfolio/<PORT>/evidence/`:

- `<target>.dom.html` — rendered DOM after JS execution
- `<target>.png` — viewport screenshot
- `checks.log` — the greps/assertions run and their results

Proof standards:

- Exercise the real user path: load the served page over HTTP in headless
  Chrome. Never assert against `src/` or `dist/assets/*.js` text, internal
  setters, or test-only endpoints (there are none).
- Capture the action and the resulting state: keep both the DOM dump and the
  screenshot for every target; one without the other is incomplete.
- Verify side effects alongside what's visible: this app has no writes
  (no forms post, no storage, no API). Say so in the proof; do not invent
  side effects. The only outbound effects are `mailto:`/external links —
  verify hrefs, never follow them.
- Mocks: none. There is no network boundary to mock (fully static).
- Dry-run/test mode: none exists. `vite preview` serves the real build.

## Cleanup

Kills only the server this run started (via pidfile), never by process name:

```sh
.opencode/skills/verify-portfolio/cleanup.sh 4311
```

Removes `/tmp/verify-portfolio/<PORT>/server.pid` and `server.log`.
Evidence in `/tmp/verify-portfolio/<PORT>/evidence/` is never deleted by
cleanup. Run cleanup after every attempt, including failed ones.

## Helpers

All executable, all take `PORT` as first arg:

- `launch.sh [PORT]` — build is assumed done; serve `dist/` via
  `vite preview --port PORT --strictPort`, wait for readiness, record pid.
  Default port `4311`.
- `doctor.sh [PORT]` — read-only check, prints `OK` or a `FAIL_*` reason.
- `drive.sh [PORT] [OUTDIR]` — headless-Chrome capture over all targets.
  Resolves the Chrome binary (`Google Chrome` on macOS, `google-chrome` /
  `chromium` elsewhere, `$CHROME_BIN` override). Default outdir
  `/tmp/verify-portfolio/<PORT>/evidence`.
- `cleanup.sh [PORT]` — kill pidfile process only, remove pidfile + log,
  keep evidence.

Chrome runs with its own `--user-data-dir` under the run dir, so verification
never touches the user's browser profile.
