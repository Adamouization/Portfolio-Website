# Agent Operating Guide — Adam Jaamour Portfolio

Adam Jaamour's one-page personal site (interactive CV). Live at [adam.jaamour.com](https://adam.jaamour.com/). GitHub: [Adamouization/Portfolio-Website](https://github.com/Adamouization/Portfolio-Website).

`AGENTS.md` is the source of truth for Cursor, Claude Code, and other agents. `CLAUDE.md` imports this file. Continual-learning updates only the two **Learned** sections at the bottom.

## Stack

- Jekyll via the `github-pages` gem (not a Node/Next.js app)
- Ruby **3.3.6** (`.ruby-version`)
- Liquid templates, vanilla HTML/CSS/JS
- Pure.css + Font Awesome 4 + particles.js
- Google Analytics (`G-8HMF4KN8GS`); Vercel Analytics is present but commented out
- Contact form: Formspree (`https://formspree.io/adam@jaamour.com`)

## Layout

```
_config.yml                 # site title, URL, GA id, icon_size
index.html                  # front matter only → layout: default
_layouts/default.html       # shell: head, header, #about, footer
_includes/                  # one partial per section (see order below)
assets/css/                 # main.css (theme) + feature CSS; prefer custom.css for overrides
assets/js/                  # particles, typewriter, stackoverflow accordion, year stamp
assets/img/                 # logos, screenshots, book covers, favicons
run.sh                      # bundle exec jekyll serve --watch && open localhost
```

Section order in `_includes/about.html` (do not reorder without asking):

1. `introduction.html` — bio
2. `skills.html` — languages / frameworks / tools
3. `work.html` — three-column work cards
4. `education.html` — three-column education cards
5. `publications.html`
6. `large_projects.html` — JS array `large_projects` → card renderer
7. `open_source_projects.html` — JS array `projects` → card renderer
8. `stackoverflow.html` — static accordion of top answers
9. `recommended_readings.html` — book carousel
10. `contact.html` — Formspree form

## Local development

Ruby is not a Python venv. Isolate gems with Bundler:

```bash
chruby 3.3.6                          # or rbenv/asdf reading .ruby-version
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --watch      # or ./run.sh
```

Site: `http://127.0.0.1:4000`. Generated output is `_site/` (gitignored). Keep `vendor/` gitignored.

Do not use system Ruby or `gem install` into the global gemset for this project.

## Content vs code

Most work is **content**, not architecture.

| Change | File | Pattern |
|---|---|---|
| Bio / headline copy | `_includes/introduction.html` | First person; bold key titles |
| Hero typewriter titles | `_includes/header.html` `data-type` JSON array | Keep it a short rotating list |
| Job | `_includes/work.html` | New `.education-column` (newest first). Logo in `assets/img/`, `site.icon_size` |
| Education | `_includes/education.html` | Same three-column card pattern |
| Featured/SaaS project | `_includes/large_projects.html` `large_projects` array | Prepend. Image + description + `{ text, link }` buttons. Use `?ref=adamjaamour` on own product URLs |
| Open-source repo | `_includes/open_source_projects.html` `projects` array | Prepend. `githubLink` required; `websiteLink` optional |
| Skills icons/copy | `_includes/skills.html` | Icon + short paragraph per column |
| Book | `_includes/recommended_readings.html` | Cover in `assets/img/`, match existing `.zoom-container` markup |
| SEO / social meta | `_includes/head.html`, `_config.yml` | Canonical is `https://adam.jaamour.com/` |
| Visual override | `assets/css/custom.css` | Do not edit vendored/theme CSS unless necessary |
| Site-wide title/email/GA | `_config.yml` | |

Retired items stay as HTML comments (old jobs, old project-card markup). Leave them; do not delete comment blocks unless asked.

## Voice and facts

- Write as Adam, first person, professional CV tone. Do not invent employers, dates, grades, publications, or product claims.
- If a fact is missing, ask. Prefer shortening existing copy over fabricating detail.
- Public email for display: `hello@jaamour.com`. Formspree still posts to `adam@jaamour.com` — do not "fix" that unless asked.
- Own-product links in the footer and project cards use `?ref=adamjaamour` (or `?ref=adamportfolio` where that is already the convention).

## Do not

- Scaffold Next.js, React, Tailwind, or a multi-page app. This stays a Jekyll one-pager.
- Enable Vercel Analytics (`_includes/vercel-analytics.html`) without being asked.
- Commit `_site/`, `vendor/`, `.env`, or `.cursor/hooks/state/`.
- Rewrite `assets/css/main.css` for a one-off tweak — use `custom.css`.
- Change the three-column education/work layout without checking mobile (`max-width: 600px` stacks columns).
- Update the GitHub repo URL in open-source cards from historical `Adamouization.github.io` unless the user wants that corrected.

## Verification

After HTML/CSS/JS/content changes: `bundle exec jekyll serve --watch`, then check the edited section on desktop and a ~375px viewport. Confirm internal hash anchors, images, and outbound buttons. There is no test suite.

## Learned User Preferences

- Isolate Ruby gems with Bundler `path vendor/bundle` (chruby + `.ruby-version` 3.3.6); do not use a Python-style venv or the system gemset.
- Keep this site a Jekyll one-pager. Do not migrate the stack unless explicitly asked.
- Do not invent or embellish career facts; ask when copy needs a date, employer, or claim that is not already in the repo.
- Leave commented-out legacy HTML in place unless asked to delete it.

## Learned Workspace Facts

- Canonical host is `https://adam.jaamour.com/`; GitHub remote is `Adamouization/Portfolio-Website`. Older README/clone URLs and the open-source card for this site still point at `Adamouization.github.io`.
- Jekyll is driven by `github-pages` + `webrick`; Ruby 3.3.6. `run.sh` serves and opens `http://127.0.0.1:4000`.
- Large projects and open-source lists are JS data arrays rendered into the DOM, not extra Liquid pages.
- Work and education share the `.education-row` / `.education-column` three-column card layout (stacks at 600px).
- Google Analytics is live; Vercel Analytics include is commented out in `_layouts/default.html`.
- Contact is Formspree; privacy policy is a footer modal in `_includes/footer.html`.
