
import heroImg from "../assets/images/hero.jpg"
const Banner = () => {
  return (
    <>
      <div className="bg-[#4B1D70] flex justify-center items-center">
        <div className="w-150 p-10">
           <img className="w-full rounded-4xl  transition-transform duration-300 hover:scale-105 " src={heroImg}/>
        </div>
            
        <div className="flex justify-center flex-col items-center w-250 gap-1.5  text-[#E5B94B] font-bold">
            <h4 className="text-xl">✦ THE FESTIVAL OF LIGHTS ✦</h4>
            <h2 className="text-white text-4xl">Our Diwali Memories</h2>
            <h3 className="text-3xl">Moments of Joy & Togetherness</h3>
            <h6 className="text-xs">A celebration of lights, traditions, food and happiness.</h6>
        </div>
      </div>
    </>
  )
}

export default Banner
