import Blogs from "./Blogs";
import CopyRight from "./CopyRight";
import GetInvolved from "./GetInvolved";
import Links from "./Links";
import Teams from "./Teams";

const Footer = () => {
  return (
    <>
    <div className="space-y-6 md:space-y-2 md:flex justify-between space-x-4 px-3 md:px-16 lg:px-32">
      <img src="assets/footer-img.png" alt="Footer Image" />
      <GetInvolved />
      <Links />
      <Teams />
      <Blogs />
    </div>
    <CopyRight />
    </>
  );
};

export default Footer;
