import logo from "../assets/images/lamp.png"

const Footer = () => {
  return (
    <>
    <div className="bg-[#32104D] text-[#E5B94B] font-bold flex gap-2  flex-col justify-between p-4 items-center">
         <div className="flex  gap-3 items-center">
                <img src={logo} className="w-13 h-9 drop-shadow-[0_0_10px_#E5B94B] transition-transform duration-300 hover:scale-105"/>
              <h1 className="font-extrabold text-xl drop-shadow-[0_0_10px_#E5B94B]"> Diwali Dairy <span>2026</span></h1> 
            </div>
        
                <p className="text-white font-medium">Celebrating the beautiful moments of the diwali 2026 with fa,mily, friends, lights and happiness.</p>
                <h4>Made With ❤️</h4>
                <p className="text-white font-medium">Sparkels fade, moments stay forever.</p>
                <p className="font-light text-xs text-[#C9A7EB]">© 2026 Diwali dairy.All rigths reserverd.</p>
            

    </div>
       
    </>
  )
}

export default Footer
