
import './App.css'
import Blogs from './conponents/Blogs/Blogs'
import Bookmarks from './conponents/Bookmarks/Bookmarks'
import Header from './conponents/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='md:flex'>

      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
