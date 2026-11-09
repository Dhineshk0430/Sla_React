
import { Link } from "react-router-dom"

import img1 from "../assets/images/myimg1.jpeg"
import img2 from "../assets/images/myimg2.jpeg"
import img3 from "../assets/images/myimg3.jpeg"
import img4 from "../assets/images/myimg4.jpeg"

import heroImg from "../assets/images/myhero.jpeg"

const MyCelebration = () => {
  return (
    <>
     
      <div className="bg-[#4B1D70] flex justify-center items-center">
        <div className="w-150 p-10">
          <img
            className="w-full rounded-4xl transition-transform duration-300 hover:scale-105"
            src={heroImg}
          />
        </div>

        <div className="flex justify-center flex-col items-center w-250 gap-1.5 text-[#E5B94B] font-bold">
          <h4 className="text-xl">✦ THE FESTIVAL OF LIGHTS ✦</h4>
          <h2 className="text-white text-4xl">My Diwali Celebration</h2>
          <h3 className="text-3xl">A Day Full of Joy & Happiness</h3>
          <h6 className="text-xs">
            A beautiful celebration of traditions, food, fun and memories.
          </h6>
        </div>
      </div>

      
      <div className="bg-[#c0aada] flex p-10 h-100 items-center justify-between">

        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
          <h2 className="text-3xl">My Diwali Morning</h2>

          <h4 className="text-xl font-normal text-[#3B145C]">
            My Diwali celebration started early in the morning with lots of
            excitement and happiness.

            <br /><br />

            I woke up early, took a traditional oil bath and wore my new
            dress to celebrate the special occasion.

            <br /><br />

            After getting ready, I burst some crackers and enjoyed the
            festive atmosphere with my family.

            <br /><br />

            For breakfast, I had idly with non-gravy dishes, which made
            my morning even more special.
          </h4>
        </div>

        <div>
          <img
            src={img1}
            className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

     
      <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">

        <div>
          <img
            src={img2}
            className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
          <h2 className="text-3xl">My Diwali Afternoon</h2>

          <h4 className="text-center text-xl font-normal text-[#3B145C]">
            The afternoon was filled with delicious food and a little
            productivity.

            <br /><br />

            I enjoyed a tasty non-vegetarian lunch with my family.
            The special lunch made the celebration even more memorable.

            <br /><br />

            After lunch, I spent some time working on my tasks and
            completing my project work.

            <br /><br />

            Later, I took a short nap and relaxed for the evening.
          </h4>
        </div>

      </div>

     
      <div className="bg-[#c0aada] flex p-10 h-100 items-center justify-between">

        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
          <h2 className="text-3xl">My Diwali Evening</h2>

          <h4 className="text-xl font-normal text-[#3B145C]">
            After taking some rest, I got ready to enjoy my evening.

            <br /><br />

            I went out to play cricket with my friends. Playing cricket
            brought lots of fun, laughter and excitement.

            <br /><br />

            It was a wonderful way to spend my Diwali evening with
            my friends and enjoy the festive spirit.
          </h4>
        </div>

        <div>
          <img
            src={img3}
            className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>

      
      <div className="bg-[#EDE0FA] flex p-10 h-100 items-center justify-between">

        <div>
          <img
            src={img4}
            className="w-120 rounded-4xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-center gap-3 text-[#290b42] font-bold flex-col items-center w-150 h-70">
          <h2 className="text-3xl">My Diwali Night</h2>

          <h4 className="text-center text-xl font-normal text-[#3B145C]">
            My Diwali celebration continued into the night.

            <br /><br />

            I burst some more crackers and enjoyed the beautiful
            festive lights around me.

            <br /><br />

            After that, I had dinner with my family and spent some
            peaceful moments together.

            <br /><br />

            Finally, I completed my project work, felt happy about
            my productive day and went to sleep with wonderful
            Diwali memories.
          </h4>
        </div>

      </div>

      
      <div className="bg-[#c0aada] flex p-10 h-40 flex-col items-center justify-between">

        <h4 className="text-center text-[#3B145C]">
          "My Diwali was a perfect combination of traditions, family,
          friends, delicious food, fun and productivity. A day filled
          with happiness and unforgettable memories."
        </h4>

        <div className="bg-[#4B1D70] text-[#E5B94B] w-30 flex items-center justify-center h-8 rounded-full mt-8 hover:drop-shadow-[0_0px_11px_#4B1D70] transition-transform duration-500 hover:scale-110">
          <Link to="/">Home</Link>
        </div>

      </div>
    </>
  )
}

export default MyCelebration
