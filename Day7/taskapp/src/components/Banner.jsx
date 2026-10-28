import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="bg-sky-200 p-5 mt-2 font-medium flex justify-between text-center">
      <Link to="/string" className="bg-white w-30 rounded-2xl text-center">String</Link>
       <Link to="/number" className="bg-white w-30 rounded-2xl text-center">Number</Link>
        <Link to="/boolean" className="bg-white w-30 rounded-2xl text-center">Boolean</Link>
         <Link to="/falsy" className="bg-white w-30 rounded-2xl text-center">Falsy</Link>
          

    </div>
  )
}

export default Banner
