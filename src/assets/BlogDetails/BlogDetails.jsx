import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function Blog() {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs"));

  console.log("Blogs from localStorage:", blogs);

  if (!blogs) {
    console.error("No blogs found in localStorage");
    return <div>Error: No blogs found</div>;
  }

  const blog = blogs.find((blog) => blog.id === id);

  console.log("Blog with ID", id, ":", blog);

  if (!blog) {
    console.error("Blog not found with ID", id);
    return <div>Error: Blog not found</div>;
  }

  return (
    <div>
      <nav className="flex justify-between items-center py-3 px-9 font-semibold text-2xl border w-full">
        <h1 className="font-semibold text-[30px]">PWSkills Blog</h1>
        <Link to={`/`}>
          <GoArrowLeft />
        </Link>
      </nav>

      <section className="border border-gray-300 m-3 rounded-lg p-3 space-y-4">
        <div className="flex justify-between p-2 items-center bg-[#6F11F5] rounded-lg">
          <div className="space-y-2">
            <h1 className="text-white text-[19px] font-semibold lg:text-[30px]">{blog.title}</h1 >
            <p className="text-white lg:text-[20px]">{blog.description}</p>
          </div>
          <img src={blog.post} alt="" className="w-64 h-52 lg:w-96 lg:h-80"/>
        </div>
        <p className="lg:text-[30px] lg:font-light">
            {blog.blogContent}
        </p>
      </section>
    </div>
  );
}

export default Blog;
