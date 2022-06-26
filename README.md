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
- Read the other [rules of ARIA](https://www.w3.org/TR/using-aria/#intro)
- "Shift a11y left" - Design in a11y from the start. Don't merely put the onus on developers. Designers should design for a11y. Examples:
  - Anything a mouse can do, a keyboard user needs to be able to do.
  - Figma tools like [Stark](https://www.figma.com/community/plugin/732603254453395948/Stark) and [A11y Annotation Kit](https://www.figma.com/community/file/953682768192596304) allow designers to convey a11y info.
  - Visual treatments should have sufficient contrast and not rely upon color alone. Use [WCAG contrast checker](https://webaim.org/resources/contrastchecker/)
- Semantic HTML is the foundation. [div or span is a last resort](https://twitter.com/housecor/status/1434168409072324610). Use the tag that's designed for the job. Avoid creating custom elements when a native one exists. [Here's an example where a custom element was useful](https://giuseppegurgone.com/twitter-html/?ck_subscriber_id=193063445)
- aria-label is basically [only for interactive and landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute#support).
- Role is a last resort. Again, prefer a specific tag first.
  - `h1` has a role="heading
  - `button` has role="button"
  - `section` has role="region"
  - `footer` has role="complimentary",
  - `header` has role="banner" (when not nested under `aside`, `article`, `main`, `nav`, or `section`.) (and yes, `header`/`footer` can be used elsewhere in the page to mark up headers footers for sections too.
- The most broadly useful roles (because they don't have an HTML tag equivalent):
  - [feed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Feed_Role)
  - [img](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Role_Img) (for grouping separate images together for a shared description)
  - [search](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role) - Apply to search input's `form` tag
  - [switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role) - For 2 on/off states, like a more specific checkbox.
  - [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
- Be deliberate and careful with motion. Check [prefers-reduced-motion](https://tatianamac.com/posts/prefers-reduced-motion/?ck_subscriber_id=1319725958) and minimize motion if set.
- Add a heading to each major section of the UI, like navigation, even if visually hidden because [many screen reader users don’t navigate by landmarks](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/) but do navigate by headings.
- After client-side routing, [Provide a skip link that takes focus on a route change](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/) within the site, with a label that indicates what the link will do when activated: e.g. "skip to main navigation". Include an ARIA Live Region on page load. On a route change, append text to it indicating the current page, e.g. "Portfolio page".
- Avoid built-in form validation. Ironically, [it's not accessible](https://adrianroselli.com/2019/02/avoid-default-field-validation.html)
- Consider HTML order. Remember that screen readers read top down. So avoid putting extraneous things before the main content (sharing, tags, ads, etc)
- For toggles, make it clear whether it's selected. And what will happen if it's clicked. For example prefer "Currently muted, click to unmute" over "muted".
- Announce when something is expanded or collapsed.
- Avoid spelling phonetically because Braille readers get confused. Screen reader users are used to words being mispronounced.
- Set the tabindex=-1 to convey that something can only be focused via a func call. Useful for headers that you want to focus programmatically when an anchor is clicked.

## A11y Audit Checklist

- [ ] Is first tab "skip to main content"?
- [ ] Are form labels tied to the input?
- [ ] Are form errors announced immediately, and marked as errors?
- [ ] Are required fields marked via `aria-required` (or the required attribute if you want native behavior)?
- [ ] Are invalid fields (that failed validation) marked via `aria-invalid`?
- [ ] Do errors have a role="alert"?
- [ ] Are any buttons disabled? Don't. [Disabled buttons suck](https://axesslab.com/disabled-buttons-suck/). Instead, [use aria-disabled and ignore clicks](https://css-tricks.com/making-disabled-buttons-more-inclusive/). Or, consider [these disabled button approaches and alternatives](https://stories.justinewin.com/disabled-buttons-dont-have-to-suck-10da0bb6d37e).
- [ ] Is Navigation well-named?
- [ ] Open the screen reader's rotor: Are links, heading, buttons all well named? Avoid links with text of "click here".
- [ ] Is the HTML lang tag set when the language changes?
- [ ] Is [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) set on the relevant form fields?
- [ ] [Are `aria-live` and a skip link being used to announce new content/alerts/pages](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)? **Note**: The aria-live attribute must be present in the DOM right from the beginning, even if the element doesn’t hold any message yet, otherwise, Assistive Technologies may not work properly.
- [ ] [Is `aria-current` being used to mark and style active links](https://twitter.com/housecor/status/1476910306702077954)?
- [ ] Can I navigate the app via the keyboard in a logical order? Can I always see what is focused? (use inert for invisible, rendered elements)
- [ ] Are radios and other related fields [wrapped in a fieldset](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form#the_fieldset_and_legend_elements)? - NOTE: When you do, [wrap each radio in a div, not a p](https://twitter.com/housecor/status/1528043515044823041)
- [ ] Is the [input type specified as specific as possible](https://twitter.com/mgechev/status/1483673112856219649?s=27)?
- [ ] Is aria-busy being used? Don't. [Few screenreaders honor it, and it ironically makes the content inaccessible](https://developer.paciellogroup.com/blog/2018/05/short-note-on-being-busy/)
- [ ] Is the title attribute used anywhere? [Don't](https://www.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/). It hides content from mobile and tablet users as well as assistive tech users and keyboard only users.
- [ ] When I click on a link, does it focus the proper item? If I click an anchor, does it focus the heading?
- [ ] Is the markup semantic? Does it use the most specific tag possible.
- [ ] [Are font sizes declared in em/rem](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)? Other values like padding/margin/border width should be declared via pixels so they don't change and take up a bunch of space when the user has font size/zoom cranked up (which would make content harder to read by making each line very short). Rule: If the value should increase with the default font size, use rem. Otherwise, use px.
- [ ] Search the code: Where is `role` used? Could a semantic tag be used instead?
- [ ] Are useful [landmarks](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) displayed in the rotor? (Use good semantic markup, and apply roles when semantic markup isn't possible/sufficient)
- [ ] Are buttons and anchors being used as intended? [They operate differently](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#accessibility_concerns). (search code for these tags to focus audit)
- [ ] Have we reviewed everything that can't be automated that's on [a11y-automation](https://a11y-automation.dev/)? This site lists the status of each thing to check, and whether it can be automated.

## A General Audit Workflow (h/t to Marcy Sutton)

1. Make sure things are rendered in the browser as expected.
1. Try navigating the site with only my keyboard, taking note of what does and doesn't work.
1. Scan the page with developer tools (Accessibility Insights is one of my go-tos).
1. Take note of how screen readers behave on Mac, Windows, and even mobile devices & emulators.
1. Zoom in and out and watch for how content reacts. The Web Content Accessibility Guidelines (WCAG) state that in order to be accessible, a site should be usable at 200% zoom. This number is really a minimum - many folks with vision disorders often zoom any farther.

Once I've got a list of things that need addressed from the user side of things, I start in on the code. I often start conversations with Creative/Design teams as well to prevent accessibility issues earlier in the software development lifecycle.

As I dive in to fix accessibility problems with code, I prioritize them based on user impact and the Web Content Accessibility Guidelines. I aim to fix things one viewport size at a time, though it's important to double check that changes in one place don't have an effect on others.

## A11y Tools

- Chrome Audits tab (powered by [Lighthouse](https://developers.google.com/web/tools/lighthouse))
- [Accessibility Insights for Chrome](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni?hl=en)
- [Axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) accessibility checker Chrome extension
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
- [Axe Core CLI](https://github.com/dequelabs/axe-core) Axe CLI - Useful for CI.
- [IBM Accessibility Tool](https://www.ibm.com/able/toolkit/tools/)
- [Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) accessibility evaluation tool for Chrome
- [Siteimprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc/related?hl=en-US)
- [ChromeLens](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd)
- [Color contrast checker](https://webaim.org/resources/contrastchecker/)
- [Testing Library](https://testing-library.com/) - Encourages writing accessible apps by writing tests that mimic how user's interact.
- [ESLint A11y plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [Pa11y](https://pa11y.org/) - Run a11y checks on your CI server
- [Complete Guide to a11y tooling](https://www.smashingmagazine.com/2021/06/complete-guide-accessibility-tooling/)

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
- [Check for screenreader accessibility support for specific features](https://a11ysupport.io)
- [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG20/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist) - A distilled version of WCAG guidelines
- [Accessible Routing](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
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

### NVDA Cheatsheet

- I prefer configuring it to use the Caps Lock key as the NVDA key.
- NVDA+n activates the NVDA menu

### Chrome Screen Reader Extension (formerly called Chromevox) Cheatsheet

[Chromevox docs](https://www.chromevox.com/keyboard_shortcuts.html)

- Chromevox = `Ctrl+cmd` on Mac
- Chromvox + . = Show all commands and search box
- Navigate elements: `Ctrl+cmd+arrows`

Announce table cell header:

- `Cmd+ctrl+backslash` while reading table cell to enter table mode.
- `Cmd+ctrl+T+H` to announce current cell's headers.

### Voiceover Cheatsheet

- Open/close: CMD+F5 (or, via toolbar if enabled in preferences)
- "VO" default chord: Ctrl+Alt
- Mute: Ctrl
- Rotor: VO+U (so Ctrl+Alt+U), then use left/right arrows to shift between
- [Quick Nav](https://support.apple.com/guide/voiceover/with-quick-nav-vo27943/mac): Hold both arrow keys to toggle. (allows navigating via arrows). Press up down to change sections, left right to nav within a section. Note that tables read out the headers as you navigate the content. To Nav between table cells: Ctrl+Alt+arrow.
- TIP: Voiceover works best in Safari. Avoid using Voiceover on a browser with many tabs/windows open. Doing so will cause it to take a long time to initialize. So if you have many tabs open in Chrome for instance, use Firefox or Safari.
- [More tips / keyboard shortcuts](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)
