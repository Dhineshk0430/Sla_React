import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
       <div className="bg-amber-400 flex justify-between p-4 font-bold ">
        <div>
            Logo
        </div>
        <div className="flex gap-10">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/">Home</Link>
        </div>
        </div> 



    </>
  )
}

export default Navbar
