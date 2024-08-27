import BlogsList from "@/components/blogs/blogs-list/BlogsList";
import StoreProvider from "@/provider/BlogProvider";

const page = () => {
  return (
    <div>
      <StoreProvider>
        <BlogsList />
      </StoreProvider>
    </div>
  );
};

export default page;
