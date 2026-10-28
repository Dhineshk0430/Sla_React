import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-amber-800 flex justify-between p-3 text-amber-50 font-bold">
        <div className="ml-5">
            Logo
        </div>

        <div className="w-70 flex gap-3 ">
            <Link  to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/help"}>Help</Link>
            <Link to={"/book"}>Book</Link>
        </div>
    </div>

    
    </>
  )
}

export default Navbar
