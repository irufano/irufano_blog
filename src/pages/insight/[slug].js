import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug } from "../../utils/posts";
import { useEffect } from "react";

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  useEffect(() => {
    // handle copy code
    document.addEventListener("click", function (e) {
      if (e.target.closest(".copy-code")) {
        const button = e.target.closest(".copy-code");
        const codeId = button.getAttribute("data-code-id");
        const codeToCopy = document.getElementById(codeId).textContent;
        navigator.clipboard.writeText(codeToCopy).then(() => {
          button.innerHTML = button.innerHTML =
            '<svg class="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
          setTimeout(() => {
            button.innerHTML =
              '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Copy"><path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g></svg>';
          }, 2000);
        });
      }
    });
  }, []);

  return (
    <Layout>
      <article className="prose prose-lg dark:prose-dark mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          {post.meta.title}
        </h1>
        <p className="text-gray-500 mb-8">{post.meta.date}</p>

        {/* Display Section Links */}
        {post.sections.length > 0 && (
          <nav className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Sections</h2>
            <ul className="list-disc ml-6">
              {post.sections.map((heading) => (
                <li key={heading.id} className="mb-1">
                  <a
                    href={`#${heading.id}`}
                    className={`text-blue-600 hover:text-blue-800 ${
                      heading.level === "3" ? "ml-4" : ""
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Post Content */}
        <div
          className="prose prose-lg dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold">Tags:</h4>
          <ul className="list-none flex space-x-3 mt-2">
            {post.meta.tags.map((tag) => (
              <li
                key={tag}
                className="text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
}
