
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setbookmarks] = useState([])

  const handleToAddBookmarks = blog => {
    console.log('bookmark added')
  }

 

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleToAddBookmarks={handleToAddBookmarks}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
     
    </>
  )
}

export default App
