import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug } from "../../utils/posts";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
// import Prism from "prismjs";
// import hljs from 'highlight.js';
// import "prismjs/components/prism-jsx"; // Import any other languages you need
// import "prismjs/components/prism-javascript"; // For JavaScript
// import "prismjs/components/prism-python"; // For Python
// import "prismjs/components/prism-typescript"; // For TypeScript
// import "prismjs/components/prism-markup"; // For HTML
// import "prismjs/components/prism-css"; // For CSS
// import "prismjs/components/prism-dart"; // For Dart
// import "prismjs/components/prism-java"; // For Java
// import "prismjs/components/prism-bash"; // For Bash
// import "prismjs/plugins/line-numbers/prism-line-numbers";

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

// // Function to highlight code blocks with a title and copy button
// const highlightCode = (html) => {
//   // return html.replace(
//   //   /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
//   //   (match, lang, code) => {
//   //     const highlightedCode = Prism.highlight(
//   //       code,
//   //       Prism.languages[lang],
//   //       lang
//   //     );
//   //     return `
//   //       <div class="relative">
//   //       <pre><code class="language-${lang}">${highlightedCode}</code></pre>
//   //       <div class="absolute inset-x-0 top-0 h-12 w-full text-lg font-semibold p-4 bg-emerald-400 rounded-t-md flex items-center">Absolute child</div>
//   //       </div>
//   //     `;
//   //   }
//   // );
// };

// // Define the copyCode function in the global scope
// const copyCode = (event) => {
//   const codeBlock = event.target.closest("div").querySelector("code");
//   const codeText = codeBlock.innerText;
//   copyToClipboard(codeText);
// };

export default function PostPage({ post }) {
  // const highlightedContentHtml = highlightCode(post.contentHtml);
  const highlightedContentHtml = post.contentHtml;

  console.log(highlightedContentHtml);

  return (
    <Layout>
      <article className="prose prose-lg dark:prose-dark mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          {post.meta.title}
        </h1>
        <p className="text-gray-500 mb-8">{post.meta.date}</p>

        {/* Display Section Links */}
        {post.headings.length > 0 && (
          <nav className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Sections</h2>
            <ul className="list-disc ml-6">
              {post.headings.map((heading) => (
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
          dangerouslySetInnerHTML={{ __html: highlightedContentHtml }}
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
