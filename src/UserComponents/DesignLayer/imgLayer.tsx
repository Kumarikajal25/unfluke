import { useTheme } from "@/components/theme-provider"
import Searchbar from "../SearchDialog/searchbar";
import Leaderboard from "../Leaderboard/Leaderboard";
import { FaMicrosoft } from "react-icons/fa";

function ImgLayer() {
    const { theme} = useTheme();
  return (
    <div>
       <div className="  min-h-full  w-full ">
       <div className={`min-h-60  w-full ${theme !== 'dark' ? 'backImg' : ''}`}>
          <div className="Darkimg">
         <div className=" flex  min-h-60  w-full    justify-between">
           <div className="  mx-20 flex w-full  pt-10 justify-between">
            <div className=" flex flex-col gap-4">
              <div className=" flex flex-row gap-2 items-center"> 
              <FaMicrosoft  size={25} className=" pt-1"/> 
            <h1 className=" text-4xl font-medium">LeaderBoards</h1></div>
           
            <Searchbar/>
            </div>
                
                 
           </div>
          
         </div>
          </div>
        </div>
        <div className="Leaderboard  w-full  relative  bottom-7">
        <Leaderboard/>
        </div>
      
        </div>
    </div>
  )
}

export default ImgLayer
