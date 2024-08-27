import { Blog } from "@/types/types";
import { defaultAuthor } from "./authors";

export const defaultBlogs: Blog = {
  _id: "1",
  image: "https://example.com/blog-image-1.jpg",
  title: "Introduction to React",
  description:
    "In this blog post, we'll explore the basics of React, a popular JavaScript library for building user interfaces.",
  author: defaultAuthor,
  isPending: false,
  tags: ["react", "javascript", "frontend"],
  likes: 250,
  relatedBlogs: ["2", "3"],
  skills: ["react", "javascript", "html", "css"],
  createdAt: "2023-04-15T12:00:00Z",
  updatedAt: "2023-04-20T10:30:00Z",
  __v: 0,
};

