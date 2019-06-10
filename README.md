# a11y

Improving accessibility, by example

## Quick Start

```
npm install
npm start
```

The commands above will install necessary dependencies, then start the app on your machine.

## Checklist

### Semantic markup

#### Structural

[HTML5 Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)

- [ ] Headers: `h1` - `h5`
- [ ] Lists: `ul` or `li`
- [ ] Stay native: Avoid buttons made of `divs`/`spans`
- [ ] Use descriptive HTML5 semantic tags: `header`, `nav`, `footer`, `article`, `main`, `article`, `aside`, `figure`, `figcaption`, `details`, `summary`. Prefer `section` for grouping related content over `div`. Include a `header` for each section.

### Forms

- [ ] Labels: tie to input via `for` or by wrapping input
- [ ] Form submit: tie to to `form`, not `button`
- [ ] Use specific input types: color, date, datetime, datetime-local, email, month, number, range, search, tel, time, url, week
- [ ] Label button call to action specifically. Avoid "Submit".

### Aria

### Landmarks

Chromevox = `Ctrl+cmd` on Mac

Navigate elements: `ChromeVox+arrows`

- [ ] Use aria tags
