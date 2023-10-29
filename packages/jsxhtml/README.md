# jsxhtml

[![License][license-image]][license-url] [![NPM Package Version][npm-image-version]][npm-url] ![GitHub top language][language-image] ![Size][size-image] ![Last Commit][commit-image] ![Workflow CI][workflow-image]

Write jsx like template literal.

## Installation

```bash
$ npm i @kdts/jsxhtml
```

## Usage

```js
// Import ESModule
import { jsxhtml } from "@kdts/jsxhtml";

// Or require Commonjs
const { jsxhtml } = require("@kdts/jsxhtml");
```

```js
const listArray = [{ label: "First Item", isActive: true }, { label: "Second Item" }];
const title = " The list ";
const showText = false;

const templateStr = jsxhtml`<div>
    ${typeof title == "string" && title.trim().length > 0 && `<h2>${title.trim()}</h2>`}
    <ul>
        ${listArray.map(listItem => jsxhtml`<li class="item ${listItem.isActive && "active"}">${listItem.label}</li>`)}
    </ul>
    ${showText && `<p>If showText is false, this is not rendered. </p>`}
</div>`;
```

will produce the desire result

<!-- prettier-ignore -->
```html
<div>
    <h2>The list</h2>
    <ul>
        <li class="item active">First Item</li><li class="item ">Second Item</li>
    </ul>

</div>
```

Without the jsxhtml tagging function

```js
const templateStr = `<div>
    ${typeof title == "string" && title.trim().length > 0 && `<h2>${title.trim()}</h2>`}
    <ul>
        ${listArray.map(listItem => `<li>${listItem.label}</li>`)}
    </ul>
    ${showText && `<p>If showText is false, this is not rendered. </p>`}
</div>`;
```

would have produced

<!-- prettier-ignore -->
```html
<div>
    <h2>The list</h2>
    <ul>
        <li class="active">First Item</li>,<li class="undefined">Second Item</li>
    </ul>
    false
</div>
```

or you would have to write the template as follow to achieve the desire result

```js
const templateStr = `<div>
    ${typeof title == "string" && title.trim().length > 0 && `<h2>${title.trim()}</h2>`}
    <ul>
        ${listArray.map(listItem => `<li class="${listItem.isActive ? "active" : ""}">${listItem.label}</li>`).join("")}
    </ul>
    ${showText ? `<p>If showText is false, this is not rendered. </p>` : ""}
</div>`;
```

but as the template gets complex it becomes harder to read. So use `@kdts/jsxhtml` to write ease to read templates.

## License

See [LICENSE][license-url].

## Copyright

Copyright &copy; 2023. Kossi D. T. Saka.

[npm-image-version]: https://img.shields.io/npm/v/@kdts/jsxhtml.svg
[npm-image-downloads]: https://img.shields.io/npm/dm/@kdts/jsxhtml.svg?color=purple
[npm-url]: https://npmjs.org/package/@kdts/jsxhtml
[license-image]: https://img.shields.io/github/license/kossidts/jsxhtml
[license-url]: https://github.com/kossidts/jsxhtml/blob/master/LICENSE
[language-image]: https://img.shields.io/github/languages/top/kossidts/jsxhtml?color=yellow
[size-image]: https://img.shields.io/github/repo-size/kossidts/jsxhtml?color=light
[commit-image]: https://img.shields.io/github/last-commit/kossidts/jsxhtml
[actions-url]: https://github.com/kossidts/jsxhtml/actions
[workflow-image]: https://github.com/kossidts/jsxhtml/actions/workflows/node.js.yml/badge.svg
[workflow-image-2]: https://github.com/kossidts/jsxhtml/workflows/Node.js%20CI/badge.svg
