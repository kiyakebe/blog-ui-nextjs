import BlogProfile from "./BlogProfile";
import Skill from "@/components/common/Skill/Skill";
import { Blog } from "@/types/types";
import { defaultAuthor } from "@/data/authors";

import InnerHTML from 'dangerously-set-html-content'

const BlogCard = ({ _id, author, createdAt, title, description, tags }: Blog) => {
  return (
    <div className="my-6 py-6" id={_id}>
      <BlogProfile author={author || defaultAuthor } createdAt={createdAt} />
      <div className="md:flex gap-6">
        <div className="w-full md:w-8/12">
          <h1 className="text-3xl font-bold my-6">{title}</h1>
          <InnerHTML html={description} className="mb-10" /> 
        </div>
        <div className="w-full md:w-4/12 h-60 relative">
          <img
            src={author?.image || "/assets/blog-cover.jpeg"}
            alt="Blog Cover"
            className="rounded-2xl w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {tags && tags.map((tag, index) => (
        <Skill key={index} text={tag} />
      ))}
    </div>
  );
};

export default BlogCard;