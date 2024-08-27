import Avatar from "@/components/common/Avatar/Avatar";
import { defaultAuthor } from "@/data/authors";
import { Author } from "@/types/types";

const BlogDetailProfile = ({
  author,
}: {
  author: Author;
}) => {
  console.log("hshjdfgajgsdkg", author)
  return (
    <div className="flex flex-col items-center my-6 space-y-4">
      <Avatar profilePicture={author.image} />
      <h3 className="text-2xl font-bold">
        {author.name}
        <span className="border-r-2 mx-2"></span>
        software engineer
      </h3>
      <h4>@kiyakebe</h4>
    </div>
  );
};

export default BlogDetailProfile;
