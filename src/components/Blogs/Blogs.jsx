import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleToAddBookmarks}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog key={blog.id} 
                handleToAddBookmarks={handleToAddBookmarks}
                blog={blog}>
                    
                </Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleToAddBookmarks: PropTypes.func.isRequired
}
export default Blogs;