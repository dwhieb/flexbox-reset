# flexbox-reset
A CSS reset that defaults to the CSS3 flexbox model for elements whenever possible. Exceptions are made for various inline elements, form elements, etc. Based in part on the Meyer reset.

## Install

Install using npm:
```
npm install --save flexbox-reset
```

Or simply [download from GitHub](https://raw.githubusercontent.com/dwhieb/flexbox-reset/master/flexbox-reset.less).

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
```less
@import 'node_modules/flexbox-reset/flexbox-reset.less';
```

## Philosophy
When the web began, webpages were primarily modeled on traditional print paper documents, and so CSS styles were designed to imitate the classic paper book/document, and were largely text-focused. Webpages were designed to be read from top to bottom like a paper page, with headers, sidebars, and fixed page widths.

Today, webpages are no longer modeled on text documents. They are much less linear, and focus more strongly on multimedia elements, which may be positioned anywhere on the page. While many webpages still include sections of running text, these sections now usually make up just one part of a page.

So why are we still using styles designed for print layouts when our webpages now include so much more than just text?

This flexbox reset is based on the observation that modern webpages are multimedia, visual interactive layouts, where running sections of text are just one type of content among many. Since the flexbox model better captures the design of modern webpages, this reset applies the flexbox model by default, and makes exceptions for inline elements, form elements, and others.

By switching the default styling approach from block or inline to flexbox, running text becomes the special case rather than the norm. Users should apply traditional block and inline styles to sections of their page which contain running text.
