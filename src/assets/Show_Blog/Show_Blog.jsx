/* eslint-disable react/prop-types */
// BlogPreview.js
import { Link } from 'react-router-dom'
function BlogPreview({ blog }) {
  return (
    <div>
      
      <div className="border border-gray-300 w-[250px] h-[420px]  p-3 rounded-md overflow-hidden flex flex-col gap-2 ">
        <img src={blog.post} alt="" className="w-54 h-52" />
        <h1
          className="text-lg font-bold text-[16px] text-[
rgb(255, 255, 255)]"
        >
          {blog.title}
        </h1>
        <p className="text-gray-800 ">{blog.description}</p>
        <Link to={`/home/${blog.id}`} className='border text-center rounded-sm bg-pink-200 text-pink-700'>Read More</Link>
      </div>
      
    </div>
  );
}

export default BlogPreview;
