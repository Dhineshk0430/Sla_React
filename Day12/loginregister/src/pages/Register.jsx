

const Register = () => {






  return (
    <>
    <div className="bg-amber-100 h-screen  flex justify-center items-center ">

       
       <form className="bg-white w-100 h-80 flex justify-center flex-col items-center rounded-3xl">
         <h2 className="font-bold mb-6">Register Your Details</h2>
        <div >
            <input className="border w-70 p-1 m-2" onchange={handleName} type="text"  placeholder="Enter UserName" />
        </div >
         <div>
            <input className="border w-70 p-1 m-2" onchange={handleEmail} type="email" placeholder="Enter Email" />
        </div>
         <div >
            <input className="border w-70 p-1 m-2" onchange={handlePassword} type="password" placeholder="Enter Password" />
        </div>

        <button onclick={handleClick} className="bg-blue-500 w-30  text-white rounded-4xl mt-2">Register</button>
        
        </form> 
    </div>    
    </>
  )
}

export default Register
