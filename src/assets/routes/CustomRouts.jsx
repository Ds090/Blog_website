import {Routes, Route} from 'react-router-dom'
import Home from '../Blog_Bar/Blog';
import BlogDetails from '../BlogDetails/BlogDetails';

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home/:id" element={<BlogDetails/>}/>
        </Routes>
    )
}
export default CustomRoutes;