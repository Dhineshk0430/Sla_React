import { Link } from "react-router-dom"
import whyDiwaliimg from "../assets/images/whydiwali.jpg"

const WhyDiwali = () => {
  return (
    <>

    <div className="bg-[#c0aada] flex p-10 h-100 items-center justify-between">
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">Did You know why Diwali Celeberated ?</h2>
            <h4 className="text-2xl text-[#3B145C]">Learn the Histroy behind the festival Diwali</h4>
            <Link to="/history" className="bg-[#4B1D70] text-[#E5B94B] w-50 flex items-center justify-center h-8 rounded-full mt-8 hover:drop-shadow-[0_0px_11px_#4B1D70] transition-transform duration-500 hover:scale-110 ">History Of Diwali </Link>
        </div>
         <div>
            <img src={whyDiwaliimg} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
    </div>
      
    </>
  )
}

export default WhyDiwali
