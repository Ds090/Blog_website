import { useEffect, useState } from "react";

function BlogHooks() {
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

  return {handleAddBlog, blogs, showModal, setShowModal}
}

export default BlogHooks;