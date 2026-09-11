# Navigation

Fixed top bar (`src/components/Navigation.tsx`) present on every view.
Brand button (`Koji · こうじ`) scrolls to `#home`; desktop links scroll to
`#home` / `#about` / `#contact`; a Projects dropdown reaches `#work` and
`#personal`; external links go to Blog, GitHub, HuggingFace. Mobile shows a
hamburger toggling a stacked menu with the same anchors.

## Sub-features

- Brand button scrolls to home
- Desktop anchor buttons (Home, About, Get In Touch → contact)
- Projects dropdown (Work, Personal Projects)
- External links (Blog `https://baxin.pages.dev/`, GitHub, HuggingFace)
- Mobile hamburger menu with the same anchors
- Skip-to-content link (`#main-content`)

## How to get to it (user POV)

Load `/`. The nav is fixed at the top. Click `About` and the page
smooth-scrolls to the About section and the URL becomes `/#about`.
Open `Projects`, pick `Work`, land on Work Experience. On a narrow viewport
the links collapse behind the hamburger icon.

## Driving it with headless Chrome

```sh
drive.sh 4311 /tmp/verify-portfolio/4311/evidence
grep -q 'Koji · こうじ' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'id="about"' /tmp/verify-portfolio/4311/evidence/about.dom.html
grep -q 'id="work"' /tmp/verify-portfolio/4311/evidence/work.dom.html
grep -q 'id="personal"' /tmp/verify-portfolio/4311/evidence/personal.dom.html
grep -q 'https://baxin.pages.dev/' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'https://github.com/koji' /tmp/verify-portfolio/4311/evidence/root.dom.html
```

Proved when: every anchor target (`about`, `work`, `personal`, `contact`)
exists in the rendered DOM and every nav label + external href is present.

## Gotchas

- Nav clicks use `scrollIntoView({behavior:'smooth'})` + `pushState`; the
  headless harness asserts target presence, not the scroll animation.
- The dropdown is Radix UI and only renders its items on open; item labels
  live in the DOM only after interaction, so assert the `Projects` trigger.
- External hrefs are asserted, never followed.
