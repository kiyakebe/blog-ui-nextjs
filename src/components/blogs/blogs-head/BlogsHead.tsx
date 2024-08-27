import { Plus } from "lucide-react";

const BlogsHead = () => {
  return (
    <div className="flex justify-between items-center px-3 md:px-32 lg:px-64 my-10 ">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="flex">
        <input type="text" className=" border-1 border-textcolor px-4 py-2" />
        <button className="bg-basecolor text-white rounded-3xl flex p-2 px-4 ms-5"><Plus /> New Blog</button>
      </div>
    </div>
  );
};

export default BlogsHead;
