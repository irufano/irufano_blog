import { useState } from "react";
import Link from "next/link";
import path from "path";
import { getPostSlugs } from "@/utils/getPostSlugs";
import { getPostBySlug } from "@/utils/getPostBySlug";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function SearchPage({ posts }) {
  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    const filtered = posts.filter(
      (post) =>
        post?.meta?.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        post?.content?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      <ul className="mt-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.slug} className="mb-2">
              <Link href={`/posts/${post.slug}`}>
                <p className="text-blue-500 hover:underline">
                  {post?.meta?.title ?? "-"}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <li>No posts found</li>
        )}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return {
    props: {
      posts,
    },
  };
}
