import Avatar from "@/components/common/Avatar/Avatar";
import Skill from "@/components/common/Skill/Skill";
import { defaultAuthor } from "@/data/authors";
import { Bookmark } from "lucide-react";
import Link from "next/link";

const RelatedBlogsCard = () => {
  return (
    <div className="md:w-4/12 shadow-md">
      <img src="/assets/related.jpeg" alt="" className="w-full" />
      <div className="p-4">
        <h2 className="text-2xl  my-4 text-textcolor">
          Design Liberalized Exchange Rate Management
        </h2>

        <Avatar profilePicture={defaultAuthor.image} />

        <div className="my-4">
          <Skill text="UI/UX" />
          <Skill text="DEVELOPMENT" />
        </div>

        <p className="text-textcolor">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </p>

        <div className="my-6 flex justify-between">
          <div className=" text-textcolor text-2xl flex items-center">
            <Bookmark /> <p className="font-bold">2.3k Likes</p>
          </div>
          <Link href="#" className="text-basecolor">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogsCard;
