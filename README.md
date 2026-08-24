# Alex Zhu personal site

## Change information yourself

Most text lives in [site.js](site.js). Open that file on GitHub, click the pencil icon, make a small change, then select **Commit changes**. GitHub Pages normally updates the public site within a few minutes.

### What to edit

- `profile` — name, location, short introduction, and Story-page paragraph.
- `links` — add, remove, or change the links in **Find me**.
- `projects` — the two cards on the **Work** page.
- `activities` inside `about()` — the hobbies and durations on the **Story** page.
- `wroPage()` — detailed WRO Future Innovators content.
- `makerPage()` — detailed Maker Experiments content.

For example, to change a link note, edit only the words inside `note: "..."`:

```js
{ label: "Instagram", note: "Everyday work and life", url: "https://www.instagram.com/alex.zhu_17/" }
```

## Avoid editing these unless you want a visual redesign

- `styles.css` controls the design, spacing, colours, navigation, and mobile layout.
- The HTML files in each folder only identify which page to load.

## Add a new work page

1. Create a folder inside `work/`, for example `work/new-project/`.
2. Copy one of the existing `index.html` files in `work/`.
3. Add a matching page function and route in `site.js`.
4. Add the card and link to the `projects` list.

For a simple wording or link update, you only need step 1: edit `site.js` and commit it.
