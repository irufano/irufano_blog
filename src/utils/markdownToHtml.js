import { marked } from "marked";

const renderer = new marked.Renderer();

renderer.heading = (tokens, depth) => {
  // console.log(tokens);
  const headingText = String(tokens?.text || "");
  const level = tokens?.depth || 1;
  const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  switch (level) {
    case 1:
      return `<h1 id="${id}" >${headingText}</h1>`;
    case 2:
      return `<h2 id="${id}">${headingText}</h2>`;
    case 3:
      return `<h3 id="${id}">${headingText}</h3>`;
    default:
      return `<h${level} id="${id}">${headingText}</h${level}>`;
  }
};

// Convert Markdown to HTML using the custom renderer
const markdownToHtml = (markdown) => {
  return marked(markdown, { renderer });
};

export { markdownToHtml };
