# Accessibility (a11y)

Improving accessibility, by example

## Quick Start

Install [Node](http://nodejs.org), then run the following on the command line:

```
npm install
npm start
```

The commands above will install necessary dependencies, then start the app on your machine.

The master branch contains an app with **bad** accessibility. Checkout the `fixed` branch to try the app with improved accessibility. Use the screen readers below to see the huge difference.

## Slides

[Slides from "Building Accessible Web Apps"](https://www.dropbox.com/s/ozpzgcutaal5h26/Building%20Accessible%20Web%20Apps.pptx?dl=0)

## A11y Tips

- The first rule of ARIA: Don't use ARIA. Consider it a last resort. Start with semantic HTML.
- "Shift a11y left" - Design in a11y from the start. Don't merely put the onus on developers. Designers should design for a11y. Examples:
  - Anything a mouse can do, a keyboard user needs to be able to do.
  - Figma tools like [Stark](https://www.figma.com/community/plugin/732603254453395948/Stark) and [A11y Annotation Kit](https://www.figma.com/community/file/953682768192596304) allow designers to convey a11y info.
  - Visual treatments should have sufficient contrast and not rely upon color alone. Use [WCAG contrast checker](https://webaim.org/resources/contrastchecker/)
- Semantic HTML is the foundation. Use the tag that's designed for the job. Avoid creating custom components when a native one exists.
- Be deliberate and careful with motion. Check [prefers-reduced-motion](https://tatianamac.com/posts/prefers-reduced-motion/?ck_subscriber_id=1319725958) and minimize motion if set.
- Consider HTML order. Remember that screen readers read top down. So avoid putting extraneous things before the main content (sharing, tags, ads, etc)
- For toggles, make it clear whether it's selected. And what will happen if it's clicked. For example prefer "Currently muted, click to unmute" over "muted". 
- Announce when something is expanded or collapsed.

## A11y Tools

- Chrome Audits tab (powered by [Lighthouse](https://developers.google.com/web/tools/lighthouse))
- [Accessibility Insights for Chrome](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni?hl=en)
- [Axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) accessibility checker Chrome extension
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
- [Axe Core CLI](https://github.com/dequelabs/axe-core) Axe CLI - Useful for CI.
- [Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) accessibility evaluation tool for Chrome
- [Siteimprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc/related?hl=en-US)
- [ChromeLens](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd)
- [Color contrast checker](https://webaim.org/resources/contrastchecker/)
- [Testing Library](https://testing-library.com/) - Encourages writing accessible apps by writing tests that mimic how user's interact.
- [ESLint A11y plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [Pa11y](https://pa11y.org/) - Run a11y checks on your CI server

## Accessible UI Components

These sites contain UI components that are focused on a11y. Good to use as foundations or as inspiration.
- [digitala11y](https://www.digitala11y.com/accessible-ui-component-libraries-roundup/?ck_subscriber_id=1319725958)

## Screen Readers

- [NVDA](https://www.nvaccess.org/download/) - Free for Windows [Vid on usage](https://www.youtube.com/watch?v=Jao3s_CwdRU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=4)
- [VoiceOver](https://www.youtube.com/watch?v=5R-6WvAihms&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=6) - Built into Macs
- [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) for Chrome
- [Jaws](https://www.freedomscientific.com/products/software/jaws/)

## Resources

- [Learn HTML](https://www.w3schools.com/html/default.asp) including [new stuff in HTML5](https://www.w3schools.com/html/html5_intro.asp)
- [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist) - A distilled version of WCAG guidelines
- [18f accessibility guide](https://accessibility.18f.gov/)
- [A11yCasts on YouTube](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
- [Free Udacity Web Accessibility Course by Google](https://www.udacity.com/course/web-accessibility--ud891)
- [Aria Spec on W3](https://www.w3.org/TR/wai-aria-1.1/#intro_ria_accessibility)
- [Aria Authoring Practices Spec](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Accessibility Fundamentals from Google](https://developers.google.com/web/fundamentals/accessibility)
- [In Browser ChromeVox Demo](http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/)
- [Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [Frontend Handbook](https://frontendmasters.com/books/front-end-handbook/2019/#4.14)
- [Frontend Checklist](https://frontendchecklist.io)
- [Marcy Sutton's Blog on Accessibility](https://marcysutton.com/)
- [Accessibility in React Apps](https://www.aditus.io/talks/react-and-accessibility/)
- [Video of someone using a screenreader on multiple sites](https://www.youtube.com/watch?v=OUDV1gqs9GA&t=11s)

## Training

I offer on-site training and consulting on JavaScript, React, and accessibility at [reactjsconsulting.com](http://reactjsconsulting.com).

### Chromevox Cheatsheet

[Chromevox docs](https://www.chromevox.com/keyboard_shortcuts.html)

- Chromevox = `Ctrl+cmd` on Mac
- Chromvox + . = Show all commands and search box
- Navigate elements: `Ctrl+cmd+arrows`

Announce table cell header:
- `Cmd+ctrl+backslash` while reading table cell to enter table mode.
- `Cmd+ctrl+T+H` to announce current cell's headers.
