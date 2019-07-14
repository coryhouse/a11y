# Accessibility (a11y)

Improving accessibility, by example

## Quick Start

Install [Node](http://nodejs.org), then run the following on the command line:

```
npm install
npm start
```

The commands above will install necessary dependencies, then start the app on your machine.

## Slides

[Slides from "Building Accessible Web Apps"](https://www.dropbox.com/s/ozpzgcutaal5h26/Building%20Accessible%20Web%20Apps.pptx?dl=0)

## A11y Tools

- Chrome Audits tab (powered by [Lighthouse](https://developers.google.com/web/tools/lighthouse))
- [ChromeVox extension](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) screen reader for Chrome
- [Axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) accessibility checker Chrome extension
- [Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) accessibility evaluation tool for Chrome
- [Siteimprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc/related?hl=en-US)
- [ChromeLens](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd)

## Recommended Reading

- [Learn HTML](https://www.w3schools.com/html/default.asp) including [new stuff in HTML5](https://www.w3schools.com/html/html5_intro.asp)
- [Aria Spec on W3](https://www.w3.org/TR/wai-aria-1.1/#intro_ria_accessibility)
- [Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [WebAIM](https://webaim.org/)
- [Frontend Handbook](https://frontendmasters.com/books/front-end-handbook/2019/#4.14)
- [Frontend Checklist](https://frontendchecklist.io)
- [Marcy Sutton's Blog on Accessibility](https://marcysutton.com/)
- [Accessibility in React Apps](https://www.aditus.io/talks/react-and-accessibility/)

## Interested in Training?

I offer on-site training and consulting on modern JavaScript and React at [reactjsconsulting.com](http://reactjsconsulting.com)

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

### Chromevox Cheatsheet

[Chromevox docs](https://www.chromevox.com/keyboard_shortcuts.html)

Chromevox = `Ctrl+cmd` on Mac
Chromvox + . = Show all commands and search box
Navigate elements: `Ctrl+cmd+arrows`

Announce table cell header:
`Cmd+ctrl+backslash` while reading table cell to enter table mode.
`Cmd+ctrl+T+H` to announce current cell's headers.
