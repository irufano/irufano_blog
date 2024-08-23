import { marked } from "marked";

export default function markdownToHtml(markdown) {
  return marked(markdown);
}
