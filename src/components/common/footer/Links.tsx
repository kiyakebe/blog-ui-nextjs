import React from "react";

const links: string[] = ["Home", "Success Stories", "About Us", "Get Involved"];

const Links = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Links</h3>
      {links.map((link) => (
        <p className="text-textcolor text-xl my-3" key={link}>{link}</p>
      ))}
    </div>
  );
};

export default Links;
