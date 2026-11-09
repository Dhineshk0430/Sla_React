import { Link } from "react-router-dom"
import logo from "../assets/images/lamp.png"


const Navbar = () => {
  return (
    <>
    <div className="bg-[#32104D] text-[#E5B94B] font-bold flex justify-between p-4 items-center ">
     <div className="flex  gap-3 items-center">
        <img src={logo} className="w-13 h-9 drop-shadow-[0_0_10px_#E5B94B] transition-transform duration-300 hover:scale-105"/>
      <h1 className="font-extrabold text-xl drop-shadow-[0_0_10px_#E5B94B]"> Diwali Dairy <span>2026</span></h1> 
    </div>   
<div className="w-110 flex gap-10">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/history">History of Diwali</Link></div>
       <div> <Link to="/celebration">My Celebration</Link></div>
    </div>
    </div> 
    </>
  )
}

export default Navbar
