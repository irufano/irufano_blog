import { NextSeo } from "next-seo";
import CommentSection from "../../components/CommentSection";
import { getPostSlugs } from "@/utils/getPostSlugs";
import { getPostBySlug } from "@/utils/getPostBySlug";
import Link from "next/link";

export default function PostPage({ post }) {
  return (
    <div>
      <NextSeo title={post.meta.title} description={post.meta.description} />
      <h1>{post.meta.title}</h1>
      <div className="my-4">
        <strong>Tags:</strong>
        <ul className="inline">
          {post?.meta?.tags?.map((tag, index) => (
            <li
              key={index}
              className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 mb-2"
            >
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentSection postSlug={post.slug} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
