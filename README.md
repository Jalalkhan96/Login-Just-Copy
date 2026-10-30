# Login Just Copy

An animated sign-in / sign-up page with a sliding panel that switches between the two forms.

## What it is

A single-page front-end login demo. One card (`.container`) holds two forms side by side — **Create Account** (name, email, password) and **Sign In** (email, password) — each with social-login icon buttons (Google, Facebook, GitHub, LinkedIn, drawn with Ionicons). A purple toggle panel slides across the card: the "Hello, Friend!" panel invites you to sign up, the "Welcome Back!" panel invites you to sign in, and `script.js` drives the slide by adding/removing the `active` class on the container. It is front-end only — the forms have no backend and submit nowhere.

## Files

- `index.html` — the page: both forms, the social-icon rows, and the sliding toggle panels.
- `style.css` — Montserrat font, blue-grey gradient background, the 768px rounded card, and the 0.6s slide/fade transitions (including the `@keyframes move` step used when the sign-up form appears).
- `script.js` — click handlers on the `#register` / `#login` buttons that toggle the `active` class on `#container`.
- `Link Deployment` — text file recording the GitHub Pages URL this page was deployed to.
- `README.md` — this file.

## Run it

Open `index.html` in a browser. An internet connection is needed for the social icons, which load from the Ionicons CDN (unpkg).

## Tech

HTML, CSS, JavaScript, Ionicons (via CDN)

## License

MIT — see [LICENSE](LICENSE).
