"use client";
import { useGetBlogsQuery } from "@/lib/redux/api/blogsAPI";
import BlogCard from "../blog-card/BlogCard";
import { defaultAuthor } from "@/data/authors";

const BlogsList = () => {
  const { data, isLoading } = useGetBlogsQuery();

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  console.log(data);

  return (
    <div className="px-3 md:px-32 lg:px-64 divide-solid divide-y-2 my-10">
      {data?.map((blog) => {
        return <BlogCard key={blog._id} {...blog} />;
      })}
    </div>
  );
};

export default BlogsList;
