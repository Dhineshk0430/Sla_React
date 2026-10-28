

import { Link } from "react-router-dom"

const String = () => {

let title = "World Cup "

  return (
    <div className="bg-yellow-200 p-4 text-center mt-2 justify-center">
      <div className="bg-white w-30 text-center  flex justify-center rounded-2xl">
    <Link to={"/"}>Go Back</Link>
      </div>

      <h1 className="font-bold">
        ICC Cricket {title} 2027
      </h1>
      <h4>One World. One Trophy. One Champion.</h4>
      <p>
    Get ready for the biggest cricket celebration! The ICC Men's Cricket {title} 2027 will bring together the world's best cricket teams to compete for the ultimate prize in One Day International cricket.

Experience thrilling matches, unforgettable performances, breathtaking sixes, and the passion of millions of cricket fans as nations battle for cricket's most prestigious trophy.

Every Run Matters. Every Wicket Counts. History Awaits.
      </p>
    </div>
  )
}

export default String
