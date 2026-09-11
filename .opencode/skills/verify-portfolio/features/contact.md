# Contact

Connect section (`src/components/Contact.tsx`, `id="contact"`): yellow banner
card with avatar, `Ready to Start Something Amazing?` header, email link
(`mailto:baxin1919@gmail.com`, displayed obfuscated), `Read My Blog` and
`Send Email` buttons, `ありがとうございます` closing, footer copyright —
plus the catch-all 404 page (`src/pages/NotFound.tsx`) with `Return to Home`.

## Sub-features

- Email link (`mailto:`) with obfuscated display text
- `Read My Blog` opens the blog in a new tab
- `Send Email` triggers `mailto:` navigation
- Footer copyright with current year
- 404 page for unknown routes with `Return to Home` link

## How to get to it (user POV)

Scroll to Let's Connect (or nav / hero `Get In Touch`). Click the email
address to open a mail composer; click `Read My Blog` for the blog. Visit a
bogus URL (e.g. `/nope`) to see the 404 page and return home.

## Driving it with headless Chrome

```sh
drive.sh 4311 /tmp/verify-portfolio/4311/evidence
grep -q 'id="contact"' /tmp/verify-portfolio/4311/evidence/contact.dom.html
grep -q "Let's Connect" /tmp/verify-portfolio/4311/evidence/contact.dom.html
grep -q 'mailto:baxin1919@gmail.com' /tmp/verify-portfolio/4311/evidence/contact.dom.html
grep -q 'Oops! Page not found' /tmp/verify-portfolio/4311/evidence/404.dom.html
grep -q 'Return to Home' /tmp/verify-portfolio/4311/evidence/404.dom.html
```

Proved when: banner header + `mailto:` href render, the 404 DOM shows the
not-found copy with a home link, and `contact.png` shows the card visually.

## Gotchas

- The `mailto:` display text is obfuscated (`(at-mark)`); assert the href,
  not the visible text, for the address.
- `Send Email` sets `window.location.href` to `mailto:`; assert the button
  label, never click it (it would open a mail client).
- Side effects: none. No form posts, no storage, no API calls.
