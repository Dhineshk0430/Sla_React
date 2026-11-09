import { Link } from "react-router-dom"
import myCelebimg from "../assets/images/celebration.jpg"

const MyDiwali = () => {
  return (
    <>
    <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">
        <div>
            <img src={myCelebimg} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">Explore My Diwali Celebration 2026</h2>
            <h4 className="text-center text-xl text-[#3B145C]">See how i celebrated my diwali with family and relation, explore my memories with me</h4>
            <Link to="/celebration" className="bg-[#4B1D70] text-[#E5B94B] w-50 flex items-center justify-center h-8 rounded-full mt-8 hover:drop-shadow-[0_0px_11px_#4B1D70] transition-transform duration-500 hover:scale-110 ">My Dairy 2026</Link>
        </div>
         
    </div>
    </>
  )
}

export default MyDiwali
