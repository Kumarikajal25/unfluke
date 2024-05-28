import { AvatarDemo } from "./Avatar"
//import Searchbar from "./SearchDialog/searchbar"
import { ModeToggle } from "./mode-toggle"
import alert from "../assets/alert.png"
import coin from "../assets/coin icon.png"
 
function Heading() {
  return (
    <div className=" flex  w-full mx-20 justify-between items-center py-2  ">
        <div className="left">
          <div className="flex gap-2 items-center justify-center">
            <div className="icons flex gap-2 items-center">
              <img src={alert} className=" max-h-7 max-w-5"></img>
              <span className=" font-medium dark:text-zinc-300 text-red-500 cursor-pointer">Alerts</span>
             
            </div>
          
            <div className=" flex  items-center ">
            {/* <span className=" text-vtlineColour">|</span> */}
          <img src={coin} className=" max-h-9 max-w-8 pt-1"></img>
         <span className=" text-muted-foreground pt-0.5">0</span>
          </div>
          </div>
        </div>
        <div className="Right flex gap-2 items-center">
       
         
        <AvatarDemo/>
        <ModeToggle/>
        </div>
    </div>
  )
}

export default Heading
