# `monks-components-font`

CSS and font-files for Monkvetica, so you can self-host it. Follows setup from the [@fontsource library](https://github.com/fontsource/fontsource).

## Installation

Use a bundler such as webpack, rollup or grunt to load in CSS. Solutions like [CRA](https://create-react-app.dev/), [Gatsby](https://www.gatsbyjs.org/) and [Next.js](https://nextjs.org/) are prebuilt examples that are compatible.

```bash
yarn add @arthurjdam/monks-components-font // npm install @arthurjdam/monks-components-font
```

## Usage

Then within your app entry file or site component, import it in. For example in Gatsby, you could choose to import it into a layout template (layout.js), page component (index.js), or gatsby-browser.js.
```javascript
import '@arthurjdam/monks-components-font'; // Loads default weights
```

Alternatively, the same solutions could be imported via SCSS!
```css
@import "~@arthurjdam/monks-components-font/index.css";
```


Finally, you can reference the font name in a CSS stylesheet, CSS Module, or CSS-in-JS.
```css
body {
  font-family: "Monkvetica";
}
```

## Licensing

Use is copyrighted by Monks. Do not use without written consent.

## Other notes

Any suggestions or ideas can be voiced via an [issue](https://github.com/arthurjdam/monks-components/issues).