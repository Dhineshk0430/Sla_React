import shoeImage from "./assets/shoe.jpg";
import batImage from "./assets/bat.jpeg";
import hockeyImage from "./assets/Hockey.jpg";
import Cardpage from "./Cardpage";



const App = () => {


let arrobj = [{name:"Shoe",price:200,feature:"Running",img:shoeImage},
              {name:"Bat",price:1500,feature:"Cricket",img:batImage},
              {name:"Hockey Stick",price:1000,feature:"Hockey",img:hockeyImage}
        
              ]


  return (
   <>
      <Cardpage product = {arrobj}/>
   </>
 
  )

}

export default App
