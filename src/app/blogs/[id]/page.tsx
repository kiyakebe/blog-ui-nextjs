
import BlogBody from "@/components/blog-detail/blog-body/BlogBody";
import BlogProvider from "@/provider/BlogProvider";

const page = ({ params }: { params: { id: string } }) => {

  return (
    <BlogProvider>
      <BlogBody id={params.id} />
    </BlogProvider>
  );
};

export default page;
