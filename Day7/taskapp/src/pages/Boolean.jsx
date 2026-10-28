

const Boolean = () => {

let word = true
let optional = true


  return (<>
  <div className="bg-yellow-200 p-4 text-center mt-2 justify-center">
    <h1>
    {word? "Fixtures Available" :"Fixtures Not Available"}
  </h1>

  <h4>{optional&&"Match-1"}</h4>
  </div>
    
    </>
  )
}

export default Boolean
