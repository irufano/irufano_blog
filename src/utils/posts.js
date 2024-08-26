import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import rSlug from "remark-slug";
import toc from "remark-toc";
import highlight from "highlight.js";
import { visit } from "unist-util-visit";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((dir) => {
    const fullPath = path.join(postsDirectory, dir);
    return fs.statSync(fullPath).isDirectory();
  });
}

export function getPostBySlug(slug) {
  const dirPath = path.join(postsDirectory, slug);
  const files = fs.readdirSync(dirPath);

  // Find the first Markdown file in the directory
  const markdownFile = files.find((file) => file.endsWith(".md"));

  if (!markdownFile) {
    throw new Error(`No Markdown file found in directory: ${dirPath}`);
  }

  const fullPath = path.join(dirPath, markdownFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = remark()
    .use(rSlug) // Adds slugs to headings
    .use(toc) // Generates a table of contents
    .use(html, { sanitize: false })
    .use(() => (tree) => {
      visit(tree, "code", (node) => {
        const language = node.lang || "";
        const title = node.meta?.includes("title=")
          ? (node.meta || "").replaceAll(/"|title=/gi, "")
          : language;
        const highlightedCode = highlight.highlightAuto(node.value, [
          language,
        ]).value;
        const codeId = Math.random().toString(36).substring(7); // Generate a unique ID for each code block

        node.type = "html";
        node.value = `
          <div class="header-code">
          <div class="title-code">
            <span>${title}</span> 
              <button class="copy-code" data-code-id="${codeId}" aria-label="Copy code">
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Edit / Copy">
                    <path
                      id="Vector"
                      d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
          </div>
          <div class="pre-code">
          <pre><code id="${codeId}" class="${language}">${highlightedCode}</code></pre>
          </div>
          </div>
        `;
      });
    })
    .processSync(content);

  const contentHtml = processedContent.toString();

  // Extract headings for sections navigation
  const headings = [];
  const headingRegex = /<h([2-3]) id="(.+?)">(.+?)<\/h[2-3]>/g;
  let match;
  while ((match = headingRegex.exec(contentHtml)) !== null) {
    headings.push({ level: match[1], id: match[2], text: match[3] });
  }

  return {
    slug: slug,
    meta: data,
    content: contentHtml,
    sections: headings,
    raw: content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      slug: post.slug,
      meta: post.meta,
      rawContent: post.raw,
    };
  });
}

export function getPosts(page = 1, postsPerPage = 5) {
  const allPosts = getAllPosts().sort(
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date)
  ); // Sort by date;

  const totalPosts = allPosts.length;
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  let paginatedPosts;
  if (postsPerPage === Infinity) {
    paginatedPosts = allPosts;
  } else {
    paginatedPosts = allPosts.slice(start, end);
  }

  return {
    paginatedPosts,
    totalPosts,
  };
}

export function getAllTags() {
  const slugs = getPostSlugs();
  const tags = new Set();

  slugs.forEach((slug) => {
    const post = getPostBySlug(slug);
    if (post.meta.tags) {
      post.meta?.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags);
}

export function getAllPostsByTag(tag) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);

      return {
        slug: post.slug,
        meta: post.meta,
        rawContent: post.raw,
      };
    })
    .filter((post) => post.meta?.tags && post.meta?.tags.includes(tag))
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return posts;
}
