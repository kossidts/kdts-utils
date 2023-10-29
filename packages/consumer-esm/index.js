import { jsxhtml } from "@kdts/jsxhtml";

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

console.log(templateStr);
