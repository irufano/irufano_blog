import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import rSlug from "remark-slug";
import toc from "remark-toc";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((dir) => {
    const fullPath = path.join(postsDirectory, dir);
    return fs.statSync(fullPath).isDirectory();
  });
}

export function getPostBySlug(slug) {
  const dirPath = path.join(postsDirectory, slug);
  const files = fs.readdirSync(dirPath);

  console.log(slug);

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
    .use(html)
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
    contentHtml,
    headings,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      slug: post.slug,
      meta: post.meta,
    };
  });
}
