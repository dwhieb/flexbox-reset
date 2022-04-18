# flexbox-reset

A CSS reset that defaults to the flexbox model for elements whenever appropriate. Exceptions are made for various elements as appropriate.

[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)][npm]
[![npm](https://img.shields.io/npm/dt/flexbox-reset.svg?maxAge=2592000)][npm]
[![GitHub issues](https://img.shields.io/github/issues/dwhieb/flexbox-reset.svg?maxAge=2592000)][issues]
[![license](https://img.shields.io/github/license/dwhieb/flexbox-reset.svg?maxAge=2592000)][license]

[![GitHub stars](https://img.shields.io/github/stars/dwhieb/flexbox-reset.svg?style=social&label=Star&maxAge=2592000)][GitHub]
[![GitHub forks](https://img.shields.io/github/forks/dwhieb/flexbox-reset.svg?style=social&label=Fork&maxAge=2592000)][GitHub]

## Install

Install using npm:

```
npm i flexbox-reset
```

[Or download from the GitHub release page][releases].

## Usage

HTML:

```html
<link rel=stylesheet href=node_modules/flexbox-reset/flexbox-reset.css type=text/css>
```

CSS:

```css
@import 'node_modules/flexbox-reset/flexbox-reset.css';
```

LESS:

```css
@import 'node_modules/flexbox-reset/flexbox-reset.less';
```

## Philosophy

When the web began, webpages were primarily modeled on traditional print paper documents, and so CSS styles were designed to imitate the classic paper book/document, and were largely text-focused. Webpages were designed to be read from top to bottom like a paper page, with headers, sidebars, and fixed page widths.

Today, webpages are no longer modeled on text documents. They are much less linear, and focus more strongly on multimedia elements, which may be positioned anywhere on the page. While many webpages still include sections of running text, these sections now usually make up just one part of a page.

So why are we still using styles designed for print layouts when our webpages now include so much more than just text?

This flexbox reset is based on the observation that modern webpages are multimedia, visual interactive layouts, where running sections of text are just one type of content among many. Since the flexbox model better captures the design of modern webpages, this reset applies the flexbox model by default, and makes exceptions for inline elements, form elements, and others.

By switching the default styling approach from block or inline to flexbox, running text becomes the special case rather than the norm. Users should apply traditional block and inline styles to sections of their page which contain running text.

[GitHub]:   https://github.com/dwhieb/flexbox-reset
[issues]:   https://github.com/dwhieb/flexbox-reset/issues
[license]:  https://github.com/dwhieb/flexbox-reset/blob/master/LICENSE.md
[npm]:      https://www.npmjs.com/package/flexbox-reset
[releases]: https://github.com/dwhieb/flexbox-reset/releases
