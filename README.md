# a11y

Improving accessibility, by example

## Quick Start

```
npm install
npm start
```

The commands above will install necessary dependencies, then start the app on your machine.

## A11y Tools

- [ChromeVox extension](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) screen reader for Chrome
- [Axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) accessibility checker Chrome extension
- [Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) accessibility evaluation tool for Chrome
- [Siteimprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc/related?hl=en-US)

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

- [ ] Tab from URl [should provide display link to skip to main content](https://dequeuniversity.com/rules/axe/3.2/skip-link?application=AxeChrome). (see Google.com as example)

### Chromevox Commands

Chromevox = `Ctrl+cmd` on Mac
Chromvox + . = Show all commands and search box
Navigate elements: `ChromeVox+arrows`

- [ ] Use aria tags
