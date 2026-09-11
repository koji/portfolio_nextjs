# Personal Projects

Personal Projects grid (`src/components/PersonalProjects.tsx`,
`id="personal"`, data in `src/data/personalPrjData.ts`): cards with category
icon, title, status badge (Completed / In Progress / Planned), description,
tech badges, and `GitHub` / `Live Demo` buttons (rendered only when the URL
exists); closes with the `千里の道も一歩から` quote block.

## Sub-features

- Project cards with status badges and tech tags
- `GitHub` button opens the repo (new tab)
- `Live Demo` button opens the demo (new tab)
- Closing Japanese quote block

## How to get to it (user POV)

Scroll to Personal Projects (or nav Projects → Personal Projects). Browse
the grid; click `GitHub` or `Live Demo` on any card to open the link.

## Driving it with headless Chrome

```sh
drive.sh 4311 /tmp/verify-portfolio/4311/evidence
grep -q 'id="personal"' /tmp/verify-portfolio/4311/evidence/personal.dom.html
grep -q 'Personal Projects' /tmp/verify-portfolio/4311/evidence/personal.dom.html
grep -q 'GitHub' /tmp/verify-portfolio/4311/evidence/personal.dom.html
grep -q '千里の道も一歩から' /tmp/verify-portfolio/4311/evidence/personal.dom.html
```

Proved when: grid header, at least one action button, and the quote render;
`personal.png` shows the cards visually.

## Gotchas

- `GitHub` / `Live Demo` use `window.open`; the harness asserts the buttons
  render but never clicks them (clicking opens external tabs).
- Card order is the data file reversed; assert presence, not position.
