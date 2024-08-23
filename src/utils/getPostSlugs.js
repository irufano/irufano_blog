import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((dir) => {
    const fullPath = path.join(postsDirectory, dir);
    return fs.statSync(fullPath).isDirectory();
  });
}
