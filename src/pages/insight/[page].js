// src/pages/[page].js
import { getPosts } from "@/utils/posts";
import Insights from "../insight/index";

export async function getStaticPaths() {
  const { totalPosts } = getPosts(1, Infinity);
  const postsPerPage = 6;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() }, // Ensure page is a string
  }));

  return {
    paths,
    fallback: false, // or 'blocking' or 'true'
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params?.page, 10); // Parse page to integer
  const postsPerPage = 6;
  const { paginatedPosts, totalPosts } = getPosts(page, postsPerPage);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / postsPerPage),
    },
  };
}

export default function PaginatedHomePage(props) {
  return <Insights {...props} />;
}
