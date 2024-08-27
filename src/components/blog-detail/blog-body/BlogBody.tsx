"use client";

import { useGetBlogsByIdQuery } from "@/lib/redux/api/blogsAPI";
import BlogCover from "../blog-cover/BlogCover";
import { defaultBlogs } from "@/data/post";
import BlogDetailProfile from "../blog-detail-profile/BlogDetailProfile";
import { defaultAuthor } from "@/data/authors";
import BlogDescription from "../blog-description/BlogDescription";
import RelatedBlogs from "../related-blogs/RelatedBlogs";

const BlogBody = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetBlogsByIdQuery(id);

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-5/6">
        <Loader className="text-3xl" />
      </div>
    );
  }

  console.log(data);

  return (
    <div className="px-3 md:px-16 lg:px-32">
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center">{data.title}</h2>
        <p className="text-center">
          Programming, tech <span className="border-r-2 mx-2"></span> 6 min Read{" "}
        </p>
      </div>
      <BlogCover cover={data.image || defaultBlogs.image} />
      <BlogDetailProfile author={data.author || defaultAuthor} />
      <BlogDescription description={data.description} />

      <RelatedBlogs />
    </div>
  );
};

export default BlogBody;
