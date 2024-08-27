import RelatedBlogsCard from "./RelatedBlogsCard";

const relatedPost = [1, 2, 3];

const RelatedBlogs = () => {
  return (
    <div className="my-32">
      <h1 className="my-10 text-2xl font-semibold">Related Blogs</h1>
      <div className="flex md:space-x-10">
        {relatedPost.map((post) => (
          <RelatedBlogsCard key={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
