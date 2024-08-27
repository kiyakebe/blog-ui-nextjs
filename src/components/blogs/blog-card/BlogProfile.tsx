import Avatar from "@/components/common/Avatar/Avatar";
import { defaultAuthor } from "@/data/authors";
import { Author } from "@/types/types";
import { Dot } from "lucide-react";

const BlogProfile = ({
  author,
  createdAt,
}: {
  author: Author;
  createdAt: string;
}) => {
  const date = new Date(createdAt);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="flex items-center gap-4">
      <Avatar profilePicture={defaultAuthor.image} />
      <div>
        <div className="flex items-center space-y-3">
          <h3 className="font-bold">{author.name || defaultAuthor.name}</h3>
          <Dot className="text-textcolor" />
          <span className="text-sm text-textcolor">{formattedDate}</span>
        </div>
        <h2 className="uppercase font-semibold text-textcolor">
          Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default BlogProfile;
