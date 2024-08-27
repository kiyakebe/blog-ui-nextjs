import React from "react";

const blogs: string[] = ["Recent Blogs", "New Blogs"];

const Blogs = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Teams</h3>
      {blogs.map((blog) => (
        <p className="text-textcolor text-xl my-3" key={blog}>
          {blog}
        </p>
      ))}
    </div>
  );
};

export default Blogs;
