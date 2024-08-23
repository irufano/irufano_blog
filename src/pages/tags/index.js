import Link from "next/link";
import { getAllTags } from "@/utils/getAllTags";
import { getPostSlugs } from "@/utils/getPostSlugs";

export default function TagsPage({ tags }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tags</h1>
      <ul className="list-disc pl-5">
        {tags.map((tag) => (
          <li key={tag} className="mb-2">
            <Link href={`/tags/${tag}`}>
              <p className="text-blue-500 hover:underline">{tag}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const slugs = getPostSlugs();
  const tags = getAllTags(slugs);

  return {
    props: {
      tags,
    },
  };
}
