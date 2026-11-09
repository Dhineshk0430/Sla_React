import { Link } from "react-router-dom"
import img1 from "../assets/images/img1.jpeg"
import img2 from "../assets/images/img2.jpeg"
import img3 from "../assets/images/img3.jpeg"
import img4 from "../assets/images/img4.jpeg"
import img5 from "../assets/images/img5.jpeg"
import img6 from "../assets/images/img6.jpeg"
import Home from "../pages/Home"




import heronarakasurra from "../assets/images/narakasura.jpg"
const HistoryOfDiwali = () => {
  return (
    <>
       <div className="bg-[#4B1D70] flex justify-center items-center">
              <div className="w-150 p-10">
                 <img className="w-full rounded-4xl  transition-transform duration-300 hover:scale-105 " src={heronarakasurra}/>
              </div>
                  
              <div className="flex justify-center flex-col items-center w-250 gap-1.5  text-[#E5B94B] font-bold">
                  <h4 className="text-xl">✦ THE FESTIVAL OF LIGHTS ✦</h4>
                  <h2 className="text-white text-4xl">Our Diwali History</h2>
                  <h3 className="text-3xl">Moments of Joy & Togetherness</h3>
                  <h6 className="text-xs">A celebration of lights, traditions, food and happiness.</h6>
              </div>
          </div>

           <div className="bg-[#c0aada] flex p-10 h-100 items-center justify-between">
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">Who was Narakasura?</h2>
            <h4 className="text-xl font-normal text-[#3B145C]">According to Hindu mythology, Narakasura was a powerful demon king who ruled the kingdom of Pragjyotishapura.

He was believed to be the son of Bhudevi (Mother Earth) and Lord Varaha, an incarnation of Lord Vishnu.

Initially, Narakasura was powerful, but he gradually became arrogant and cruel. He began troubling gods, sages and innocent people.</h4>
           
        </div>
         <div>
            <img src={img1} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
    </div>

     <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">
        <div>
            <img src={img2} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">The cruelty of Narakasura</h2>
            <h4 className="text-center text-xl font-normal text-[#3B145C]">As his power increased, Narakasura became increasingly wicked.</h4>
            <ul className="font-normal list-disc pl-6">
              <li>He attacked the heavenly kingdom of the gods.</li>
              <li>He stole the earrings of Aditi, the mother of the gods.</li>
              <li>He captured 16,100 women and imprisoned them.</li>
              <li>He spread fear and suffering throughout his kingdom.</li>
            </ul>
            <h4 className="text-center text-xl font-normal text-[#3B145C]">His cruelty became unbearable, and the gods sought help from Lord Krishna.</h4>
        </div>
         
    </div>
       <div className="bg-[#c0aada] flex p-10 h-100 items-center justify-between">
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">Lord Krishna goes to war</h2>
            <h4 className="text-xl font-normal text-[#3B145C]">Lord Krishna decided to defeat Narakasura and put an end to his cruelty. <br />

His wife Satyabhama accompanied him in the battle. <br />

According to a popular version of the story, Narakasura had a divine protection that meant he could only be killed by his mother, Bhudevi. Satyabhama was considered an incarnation of Bhudevi. <br />

During the fierce battle, Krishna and Satyabhama fought against Narakasura's army.</h4>
           
        </div>
         <div>
            <img src={img3} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
    </div>

     <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">
        <div>
            <img src={img4} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">The death of Narakasura</h2>
            <h4 className="text-center font-normal text-xl text-[#3B145C]">During the battle, Narakasura was finally defeated and killed by Satyabhama with Krishna's support.
<br />
With his death:</h4>
<ul className="font-normal list-disc pl-6">
              <li>The imprisoned women were liberated.</li>
              <li>The stolen treasures were recovered.</li>
              <li>The people were freed from his cruelty.</li>
              <li>Peace and happiness returned.</li>
            </ul>

<h4 className="text-center text-xl text-[#3B145C] font-normal">Before his death, Narakasura reportedly requested that his death be celebrated as a day of joy rather than sorrow.</h4>
        </div>
         
    </div>

           <div className="bg-[#c0aada] flex p-10 h-120 items-center justify-between">
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">Why do we celebrate Diwali for Narakasura?</h2>
            <h4 className="text-xl font-normal text-[#3B145C]">The day Narakasura was defeated is remembered as Naraka Chaturdashi, which falls on the day before the main Amavasya Diwali celebration in many Hindu calendars.
<br />
In Tamil Nadu, people traditionally celebrate Deepavali early in the morning.
<br />
Common traditions include:</h4>

<ul className="font-normal list-disc pl-6">
              <li>Waking up early in the morning.</li>
              <li>Taking an oil bath (Ganga Snanam).</li>
              <li>Wearing new clothes.</li>
              <li>Lighting lamps.</li>
               <li>Preparing sweets and savouries.</li>
                <li>Celebrating the victory of good over evil.</li>
            </ul>
 
           
        </div>
         <div>
            <img src={img5} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
    </div>

     <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">
        <div>
            <img src={img6} className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"/>
        </div>
       
        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
            <h2 className="text-3xl">The deeper meaning of the story</h2>
            <h4 className="text-center font-normal text-xl text-[#3B145C]">The story of Narakasura teaches us that:</h4>
            <ul className="font-normal list-disc pl-6">
              <li>Power should never be used to hurt innocent people.</li>
              <li>Pride and arrogance can lead to destruction.</li>
              <li>Evil cannot win forever.</li>
              <li>Justice and righteousness must always prevail.</li>
            </ul>
        </div>
         
    </div>
<div className="bg-[#c0aada] flex p-10 h-40 flex-col items-center justify-between" >
  <h4>"Diwali is not just about lighting lamps outside our homes. It is about removing the darkness of arrogance, hatred, cruelty and ignorance from within ourselves."</h4>
  <div className="bg-[#4B1D70] text-[#E5B94B] w-30 flex items-center justify-center h-8 rounded-full mt-8 hover:drop-shadow-[0_0px_11px_#4B1D70] transition-transform duration-500 hover:scale-110 "><Link to="/" element={<Home/>}>Home</Link></div>
</div>
        
    </>
  )
}

export default HistoryOfDiwali
