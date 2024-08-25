import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // You can choose any style from Highlight.js

export function highlightCode(code, language) {
  if (hljs.getLanguage(language)) {
    return hljs.highlight(code, { language }).value;
  } else {
    return hljs.highlightAuto(code).value;
  }
}
