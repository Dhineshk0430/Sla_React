import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./components/Navbar" 
import String from "./pages/String"
import Number from "./pages/Number"
import Boolean from "./pages/Boolean"
import Falsy from "./pages/falsy"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/string" element={<String/>}/>
      <Route  path="/number" element={<Number/>}/>
      <Route  path="/boolean" element={<Boolean/>}/>
      <Route  path="/falsy" element={<Falsy/>}/>

    </Routes>
    </>
  )
}

export default App
