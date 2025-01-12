import PropTypes from 'prop-types'; 
import { IoMdBookmark } from "react-icons/io";
const Blog = ({blog, handleToAddBookmarks}) => {
    const {title, cover,author_img, author, posted_date, reading_time, hashtags} =blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
            {
                hashtags.map((hashtag, idx)=><span key={idx}> #{hashtag}</span>)
            }
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                <div>
                <img className='w-16' src={author_img} alt="" />
                </div>
                <div className='ml-6'>
                <h2>{author}</h2>
                <p>{posted_date}</p>
                </div>
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button onClick={()=>handleToAddBookmarks(blog)}className='ml-2 text-2xl text-red-600'>
                    <IoMdBookmark></IoMdBookmark></button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToAddBookmarks: PropTypes.func.isRequired
    
}

export default Blog;