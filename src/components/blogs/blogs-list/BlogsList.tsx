"use client";
import { useGetBlogsQuery } from "@/lib/redux/api/blogsAPI";
import BlogCard from "../blog-card/BlogCard";
import BlogsHead from "../blogs-head/BlogsHead";
import Link from "next/link";
import { Loader } from "lucide-react";

const BlogsList = () => {
  const { data, isLoading } = useGetBlogsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-5/6">
        <Loader className="text-3xl" />
      </div>
    );
  }

  return (
    <>
      <BlogsHead />
      <div className="px-3 md:px-32 lg:px-64 divide-solid divide-y-2 my-10">
        {data?.map((blog) => {
          return (
            <Link key={blog._id} href={`/blogs/${blog._id}`}>
              <BlogCard key={blog._id} {...blog} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogsList;
