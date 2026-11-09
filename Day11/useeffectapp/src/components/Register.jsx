import {useState} from 'react'

const Register = () => {

    const [name , setName ] = useState("")
    const [mobile , setMobile ] = useState("")
    const [email , setEmail ] = useState("")

    const [data , setData ] = useState ([])

    const handleName = (e)=>{

        setName(e.target.value)

    }

    const handleMobile = ()=>{


    }
    
    const handleEmail = ()=>{



    }


  return (
   <>
    <div>
        <form>
            <input type="text" placeholder="Enter Name" onChange={handleName} />
            <input type="text" placeholder="Enter Mobile" onChange={handleMobile} />
            <input type="text" placeholder="Enter Email" onChange={handleEmail} />
        </form>

    </div>

   </>
  )


  
}

export default Register
