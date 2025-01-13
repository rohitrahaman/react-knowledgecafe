
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setbookmarks] = useState([])
  const [makeAsRead,setmakeAsRead] = useState(0)

  const handleToAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookmarks(newBookmarks)
  }
  const handleMakeAsRead = (time, id)=>{
    const newMakeAsRead =makeAsRead + time
    setmakeAsRead(newMakeAsRead)
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setbookmarks(removeBookmark)

  }

 

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMakeAsRead={handleMakeAsRead } handleToAddBookmarks={handleToAddBookmarks}></Blogs>
      <Bookmarks makeAsRead={makeAsRead} bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
