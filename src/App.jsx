
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'
import SingleCar from './pages/SingleCar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/singlecar/:id' element={<SingleCar/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
