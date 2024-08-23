import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";
// import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "src/posts");

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

  const htmlContent = markdownToHtml(content);

  // Extract title and sections with children
  const sections = [];
  const lines = content.split("\n");
  let currentSection = null;

  lines.forEach((line) => {
    if (line.startsWith("# ")) {
      data.mainTitle = line.replace("# ", "");
    } else if (line.startsWith("## ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = {
        title: line.replace("## ", ""),
        children: [],
      };
    } else if (line.startsWith("### ") && currentSection) {
      currentSection.children.push(line.replace("### ", ""));
    }
  });

  if (currentSection) sections.push(currentSection);

  const htmlSections = sections.map((section) => ({
    title: section.title,
    children: section.children.map((child) => child),
  }));

  console.log(htmlSections);

  return {
    slug,
    meta: data,
    content: htmlContent,
    sections: htmlSections,
  };
}
