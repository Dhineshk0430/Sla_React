import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"


const App = () => {
  return (
    <>

    <Navbar/>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
         <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
    </Routes>
      
    </>
  )
}

export default App
