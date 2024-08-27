const BlogCover = ({ cover }: { cover: string }) => {
  return (
    <div className="w-full">
      <img
        src={cover}
        alt="Profile"
        width={80}
        height={80}
        className="w-full"
      />
    </div>
  );
};

export default BlogCover;
