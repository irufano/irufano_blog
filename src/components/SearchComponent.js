import { useState } from "react";
import Link from "next/link";

export default function SearchComponent({ posts }) {
  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    const filtered = posts.filter(
      (post) =>
        post?.meta?.title
          ?.toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        post?.content?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
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
              <Link href={`/post/${post.slug}`}>
                {post?.meta?.title ?? "-"}
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
