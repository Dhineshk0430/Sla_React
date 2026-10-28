

const Falsy = () => {

  let match = undefined

  return (
    <>
     <div className="bg-yellow-200 p-4 text-center mt-2 justify-center">
    <h1>
    {match?? "Match Starts soon"}
  </h1>


  </div>
    
    </>
  )
}

export default Falsy
