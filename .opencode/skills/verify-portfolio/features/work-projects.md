# Work Projects

Work Experience section (`src/components/WorkProjects.tsx`, `id="work"`,
data in `src/data/workPrjData.ts`): one card per role, sorted newest first,
each with title, company badge, period, tech tags, description, key
achievements, optional project link; closes with a `Let's Connect` CTA that
scrolls to `#contact`.

## Sub-features

- Role cards with company tint, period, tech tags
- Key Achievements list per role
- Optional per-project external link (`ProjectLink`)
- `Let's Connect` CTA scrolls to contact

## How to get to it (user POV)

Scroll to Work Experience (or nav Projects → Work, or hero `View My Work`).
Read each role card top to bottom. Click `Let's Connect` to jump to contact.

## Driving it with headless Chrome

```sh
drive.sh 4311 /tmp/verify-portfolio/4311/evidence
grep -q 'id="work"' /tmp/verify-portfolio/4311/evidence/work.dom.html
grep -q 'Work Experience' /tmp/verify-portfolio/4311/evidence/work.dom.html
grep -q 'Key Achievements' /tmp/verify-portfolio/4311/evidence/work.dom.html
grep -q "Let's Connect" /tmp/verify-portfolio/4311/evidence/work.dom.html
grep -q 'id="contact"' /tmp/verify-portfolio/4311/evidence/work.dom.html
```

Proved when: section header, at least one achievement list, and the CTA with
its `#contact` target all render; `work.png` shows the cards visually.

## Gotchas

- Cards are data-driven; copy changes in `workPrjData.ts` change the DOM.
  Assert structure (header, achievements, CTA), not exact company names.
- `ProjectLink` renders only when a project has a link; absence on some
  cards is expected.
