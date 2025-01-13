import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks, makeAsRead}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mb-2 rounded-xl pt-4">
            <div className="text-2xl text-center bg-slate-600 rounded-full">Reading Time:{makeAsRead}</div>
            <h1 className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map ((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    makeAsRead: PropTypes.number.isRequired
};

export default Bookmarks;