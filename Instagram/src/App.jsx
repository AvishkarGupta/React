import './App.css'
import CreatePost from './components/CreatePost'
import Footer from './components/Footer'
import Header from './components/header'
import { Sidebar } from './components/Sidebar'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
    <div className='containercontent'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header/>
        {selectedTab === "Home" ? <PostList/> : <CreatePost/>}
        
        
        <Footer/>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
