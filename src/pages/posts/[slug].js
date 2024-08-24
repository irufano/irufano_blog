import { NextSeo } from "next-seo";
import CommentSection from "../../components/CommentSection";
import { getPostSlugs } from "@/utils/getPostSlugs";
import { getPostBySlug } from "@/utils/getPostBySlug";
import Link from "next/link";

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

export default function PostPage({ post }) {
  console.log(post.sections);
  return (
    <div className="container mx-auto my-16 p-4">
      <NextSeo title={post.meta.title} description={post.meta.description} />
      <h1 className="text-4xl font-extrabold text-emerald-500">
        {post.meta.title}
      </h1>
      <p
        className="cursor-pointer text-emerald-500"
        onClick={() => scrollTo("12")}
      >
        kuy
      </p>
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
      <div className="my-4">
        <strong>Sections:</strong>
        {post.sections.map((section, index) => (
          <div key={`${index}-${section.id}`}>
            <a href={`#${section.id}`} className="text-lg font-semibold ">
              {section.title}
            </a>
            {section.children.map((child, idx) => (
              <div key={`${idx}-${child.id}`} className="ml-4">
                <a href={`#${child.id}`}>{child.title}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />

      <CommentSection postSlug={post.slug} />

      <div id="12">hello world</div>
    </div>
  );
}
