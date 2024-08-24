import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdownToHtml";

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
      data.mainTitle = line.replace("# ", "").trim();
    } else if (line.startsWith("## ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = {
        title: line.replace("## ", "").trim(),
        id: line
          .replace("## ", "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
        children: [],
      };
    } else if (line.startsWith("### ") && currentSection) {
      let childrenSection = {
        title: line.replace("### ", "").trim(),
        id: line
          .replace("### ", "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),
      };
      currentSection.children.push(childrenSection);
    }
  });

  if (currentSection) sections.push(currentSection);

  const htmlSections = sections.map((section) => ({
    title: section.title,
    id: section.id,
    children: section.children.map((child) => child),
  }));

  sections.forEach((a) => {
    console.log(a);
    a.children?.forEach((b) => {
      console.log(b);
    });
  });

  console.log(htmlContent);

  return {
    slug,
    meta: data,
    content: htmlContent,
    sections: htmlSections,
  };
}
