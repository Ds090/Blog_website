import { useState, useEffect } from "react";
import BlogPreview from "../Show_Blog/Show_Blog";
import AddBlog from "../Add_Blog/AddBlog";
import { GrAdd } from "react-icons/gr";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleAddBlog = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setShowModal(false); // Close the modal after adding the blog
  };

  return (
    
    <>
      <nav className="flex justify-between items-center py-3 px-9 font-semibold text-2xl border w-full">
        <h1 className="font-semibold text-[30px]">PWSkills Blog</h1>
        <button onClick={() => setShowModal(true)}><GrAdd/></button>
      </nav>
      
      {showModal && <AddBlog handleClose={() => setShowModal(false)} handleAddBlog={handleAddBlog} />}
    
      <div className="flex flex-wrap flex-row justify-start w-[100%] p-6">
        <div className="flex flex-wrap flex-row justify-evenly gap-1 ">
        {blogs.map((blog, index) => (
          <BlogPreview key={index} blog={blog} />
        ))}
        </div>
      </div>
    </>
  );
}

export default Home;
