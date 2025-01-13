import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const HomeInsightsCard = ({
  posts,
  bg = "bg-surface dark:bg-surface-dark",
}) => {
  return (
    <div className={`cursor-pointer rounded-lg shadow-md ${bg}`}>
      <ul className="space-y-0 divide-y divide-slate-100 dark:divide-slate-900">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/insight/post/${post.slug}`}>
              <div className="hover:bg-gray-50 hover:dark:bg-gray-800 rounded-md p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {post?.meta?.title ?? "-"}
                  </h3>
                  <div className="flex space-x-4">
                    <p className="flex items-center mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      <span>
                        <FeatherIcon
                          icon="calendar"
                          size={14}
                          className="mr-2 text-primary"
                        />
                      </span>
                      {post?.meta?.date ?? "-"}
                    </p>
                    <p className="flex items-center mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      <span>
                        <FeatherIcon
                          icon="clock"
                          size={14}
                          className="mr-2 text-primary"
                        />
                      </span>
                      {post?.readingTime ?? "-"}
                    </p>
                  </div>
                  <div className="mt-2">
                    <ul className="list-none flex flex-wrap items-start mt-3 space-x-2">
                      {post?.meta?.tags?.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs bg-accent dark:bg-accent-dark text-white px-2 py-1 mb-1 rounded-lg"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="ml-2">
                  <div className="inline-block bg-primary rounded-lg shadow-md p-2 ">
                    <FeatherIcon
                      icon="book-open"
                      className="text-white"
                      size={30}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={"/insight"}>
        <div className="bg-teal-100 dark:bg-teal-900 hover:bg-primary/50 hover:dark:bg-teal-950 rounded-b-md p-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            See more insights
          </h3>
          <FeatherIcon
            icon="arrow-right"
            size={30}
            strokeWidth={4}
            className="text-text dark:text-text-dark text-start"
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeInsightsCard;
