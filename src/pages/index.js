import Layout from "@/components/Core/Layout";
import { getPosts } from "@/utils/posts";
import Link from "next/link";
import Bg from "../assets/irufano-square-logo.svg";
import Image from "next/image";
import Greeting from "@/components/Greeting/Greeting";

export async function getStaticProps({ params }) {
  const page = 1; // Start with the first page
  const postsPerPage = 5;
  const { paginatedPosts } = getPosts(page, postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="relative w-full h-auto">
        {/* First Image */}
        <div className="absolute top-1/2 left-2">
          <div className="relative" style={{ filter: "blur(100px)" }}>
            <Image src={Bg} className="w-32 md:w-72" />
          </div>
        </div>

        {/* Second Image */}
        <div className="absolute top-1/4 right-8">
          <div className="relative" style={{ filter: "blur(100px)" }}>
            <Image src={Bg} className="w-32 md:w-72" />
          </div>
        </div>

        <div className=" relative flex items-center justify-center py-48">
          <div className="container mx-auto p-4">
            <div className="md:flex items-center justify-center">
              <div className="mr-0 md:mr-4 mb-6 md:mb-0">
                <h1 className="text-2xl md:text-4xl font-bold text-text dark:text-text-dark">
                  Developer Portal
                </h1>
                <p className="mt-4 text-base md:text-lg text-text dark:text-text-dark">
                  A tech docs, stories, insights about the world of information
                  technology and also provides tools for developers or others
                  who need it
                </p>
              </div>

              <Greeting />
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full  h-screen py-48 bg-purple-400">
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-sm"
          style={{ filter: "blur(60px)" }} // additional blur if needed
        >
          {" "}
          <Image src={Bg} width={300} height={200} />
        </div>
        <div
          className="absolute flex top-2 right-4 inset-0 bg-cover bg-center backdrop-blur-sm "
          style={{ filter: "blur(60px)" }} // additional blur if needed
        >
          {" "}
          <Image src={Bg} width={20} height={20} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Predictable growth starts here.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Clearbit gives you full context on every person and company in
              your target market so you can reach and convert more customers,
              more predictably.
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Predictable growth starts here.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Clearbit gives you full context on every person and company in your
            target market so you can reach and convert more customers, more
            predictably.
          </p>
        </div>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
        <h1 className="text-white text-4xl font-bold">
          Radial Gradient Background
        </h1>
        <div className="bg-white/10 dark:bg-black/30 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Glassmorphism Card
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            This is an example of a card with a glassmorphism effect. The
            background is blurred with a semi-transparent overlay.
          </p>
        </div>
      </div> */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="bg-white/10 dark:bg-black/30 backdrop-blur-lg rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Glassmorphism Card
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            This is an example of a card with a glassmorphism effect. The
            background is blurred with a semi-transparent overlay.
          </p>
        </div>
      </div> */}
      <div className="container mx-auto p-4 pt-32">
        <h1 className="text-4xl font-bold mb-8">HOME</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/insight/posts/${post.slug}`}>
                <p className="text-2xl font-semibold text-blue-600 hover:underline">
                  {post.meta.title}
                </p>
              </Link>
              <p className="text-gray-600">{post.meta.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
