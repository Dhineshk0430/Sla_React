import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"
import Book from "./pages/Book"
 

const App = () => {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/book" element={<Book/>}/>
    </Routes>
   </>
  )
}

export default App
