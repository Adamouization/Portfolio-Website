---
name: update-portfolio-content
description: Add or update CV sections on this Jekyll portfolio — bio, work, education, large projects, open-source cards, skills, books, publications, header typewriter, or footer links. Use when the user wants to add a job, project, SaaS product, GitHub repo, publication, book, or rewrite About/skills copy.
---

# Update portfolio content

Read `AGENTS.md` first. This skill is for **content** edits. Do not change the Jekyll stack.

## Before editing

1. Identify the section. Map the request to **one** include (see table in `AGENTS.md`).
2. If a date, employer, grade, URL, or product claim is not already in the repo or the user's message, **ask** — do not invent it.
3. Copy an existing sibling entry in that file and adapt it. Newest entries go **first**.

## Section recipes

### Work (`_includes/work.html`)

New `.education-column` at the start of `.education-row`. Include `h3` company, `h4` title + `(Mon YYYY - Mon YYYY|Present)`, logo (`assets/img/`, `site.icon_size`), one short `p.work-text`. Keep three visible columns unless the user asks to retire an old job (comment it out, do not delete).

### Education (`_includes/education.html`)

Same card pattern as work.

### Large / featured projects (`_includes/large_projects.html`)

Prepend an object to `large_projects`:

```javascript
{
    title: "Product Name: short tagline.",
    image: "assets/img/filename.png",
    description: "One or two sentences. Tech stack if relevant.",
    buttons: [
        { text: "Visit Website", link: "https://example.com/?ref=adamjaamour" },
    ]
}
```

`title` may include `<br><i>Subtitle</i>`. Put images in `assets/img/`. Do not uncomment the old static card HTML above the script.

### Open source (`_includes/open_source_projects.html`)

Prepend to `projects`:

```javascript
{
    title: "Repo name",
    description: "One sentence.",
    githubLink: "https://github.com/Adamouization/repo",
    languages: "Python, Jupyter",
    websiteLink: "https://example.com"  // omit if none
}
```

`languages` is a comma-separated string (used for tag CSS classes and GitHub language filter links).

### Bio / typewriter / footer

- Bio: `_includes/introduction.html` — first person, bold key roles and schools.
- Rotating titles: `_includes/header.html` `data-type='[...]'` JSON array.
- Other sites: `_includes/footer.html` first paragraph.

### Skills, publications, books

Match neighboring markup. Book covers go in `assets/img/` inside `.zoom-container`.

## After editing

1. Do not delete commented legacy HTML.
2. Serve locally (`bundle exec jekyll serve --watch`) and check the section on desktop and a narrow viewport.
3. Confirm images resolve and buttons open the right URL.
