/* eslint-disable react/prop-types */
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import { GrClose } from "react-icons/gr";

function AddBlog({ handleAddBlog, handleClose }) {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogContent, setBlogContent] = useState("");
  function setBlogPost() {
    if (post != "" && title != "" && description != "" && blogContent != "") {
      const input = {
        id: uuidv4(),
        post,
        title,
        description,
        blogContent,
      };
      handleAddBlog(input);
      handleClose();
    }else{
      alert("Please input the blog summary!");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-0 flex justify-center items-center addAnimation">
      <form className="lg:w-[450px] lg:h-[500px] flex flex-col justify-center items-center p-1 bg-[#F4F6FE] gap-2 rounded-xl m-8 w-[300px] ">
        <div className="w-full flex justify-end h-[20px] mr-6">
          <button onClick={handleClose}>
            <GrClose className="text-[20px] font-bold" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter Blog Post URL"
          className="border lg:w-[400px] py-1 px-1 font-semibold text-[16px]"
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Blog Title"
          className="border lg:w-[400px] py-1 px-1 font-semibold text-[16px]"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Blog Description"
          className="border lg:w-[400px] py-1 px-1 font-semibold text-[16px]"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Write..."
          className="border lg:w-[400px] py-1 px-1 font-semibold text-[16px]"
          value={blogContent}
          onChange={(e) => {
            setBlogContent(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-[#6F11F5] lg:w-[400px] w-full py-1 rounded-md text-white font-semibold hover:bg-purple-700 hover:transition hover:duration-500 hover:ease-in-out hover:delay-150"
          onClick={setBlogPost}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
