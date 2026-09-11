# Hero

First screen (`src/components/Hero.tsx`, `id="home"`): greeting
`こんにちは`, headline `I'm Koji`, subhead, and two CTAs — `View My Work`
(scrolls to `#work`) and `Get In Touch` (scrolls to `#contact`) — over a
shader background with a workspace mockup card below.

## Sub-features

- Headline + greeting render over the shader canvas
- `View My Work` CTA scrolls to Work section
- `Get In Touch` CTA scrolls to Contact section
- Workspace mockup card renders below the CTAs

## How to get to it (user POV)

Load `/`. The hero fills the viewport: dark canvas, `I'm Koji` headline,
two buttons. Click `View My Work` to jump to Work Experience; click
`Get In Touch` to jump to the contact banner.

## Driving it with headless Chrome

```sh
drive.sh 4311 /tmp/verify-portfolio/4311/evidence
grep -q "I'm Koji" /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'View My Work' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'Get In Touch' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'id="work"' /tmp/verify-portfolio/4311/evidence/root.dom.html
```

Proved when: headline + both CTA labels render, the `#work` target exists in
the same DOM, and `root.png` shows the hero visually.

## Gotchas

- The shader is a `<canvas>`; screenshots show it but DOM dumps do not.
  A blank-canvas screenshot with intact text still passes.
- CTA clicks scroll; the harness asserts CTA + target presence, not motion.
