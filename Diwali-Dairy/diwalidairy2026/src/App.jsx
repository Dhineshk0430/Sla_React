
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import HistoryOfDiwali from "./pages/HistoryOfDiwali"
import MyCelebration from "./pages/MyCelebration"



const App = () => {
  return (
    <>

      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route path="/history" element={<HistoryOfDiwali/>}></Route>
          <Route path="/celebration" element={<MyCelebration/>} ></Route>
        </Routes>
      <Footer/>
  
    </>
  )
}

export default App
