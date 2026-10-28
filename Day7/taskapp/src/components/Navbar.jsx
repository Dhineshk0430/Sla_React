import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-amber-500 text-white  font-bold flex justify-between gap-5 p-3">
      <div className="ml-4 bg-white text-amber-500 rounded w-20 text-center ">
        REACT
      </div>
      <div className="mr-20">
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
