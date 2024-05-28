import { DropdownMenu, DropdownMenuContent,  DropdownMenuItem,  DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import clsx from "clsx";
import { AlignJustify, ChevronDown } from "lucide-react"
import { useState } from "react";
 import whiteImg from "../../assets/whiteunfluke.png";
 import unfluke from "../../assets/unflukeicon.png";
function Navbar() {
  const [showMobileView, setMobileView] =useState<Boolean>(false);
  const [dropDown, setdropDown] =useState<Boolean>(false);
  const handleMenuIconClick = () => {
    setMobileView((prevState) => !prevState);
  };
  const handledropdown =()=>{
         setdropDown((prevState)=>!prevState);
  }
  return (
    <div className=" flex  flex-col lg:flex-row w-full mx-20 justify-between lg:items-center  py-2  dark:py-0 ">
       <div className=" left-icon flex flex-row  items-center justify-between">
        <img src={unfluke} className=" h-12 block dark:hidden"></img>
        <div className=" hidden  dark:block">
        <img src={whiteImg} className=" object-cover  h-24"></img>
        </div>
        <div className=" flex lg:hidden cursor-pointer" onClick={handleMenuIconClick}>
        <div className=" border  border-zinc-200   rounded-md hover:border-zinc-300 hover:border-2">
          <div className=" flex p-2"><AlignJustify/></div>
        </div>
</div>

       </div>
       <div className="Navigation-Menu  hidden  gap-6  text-zinc-600 font-medium dark:text-zinc-200 dark:font-normal xl:flex">
        <span className="cursor-pointer hover:text-teal-500">LeaderBoard</span>
        <DropdownMenu>
            <DropdownMenuTrigger asChild> 
            <div className="flex flex-row items-center cursor-pointer hover:text-teal-500 ">
        <span className="cursor-pointer">Historical Trading</span>
        < ChevronDown size={19} className=" pt-1"/>
        </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem >Trading</DropdownMenuItem>
              <DropdownMenuItem >Order</DropdownMenuItem>
              <DropdownMenuItem >Holding</DropdownMenuItem>
              <DropdownMenuItem >Position</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
       
       
        <span className="cursor-pointer  hover:text-teal-500">Historical Chart</span>
        <span className="cursor-pointer hover:text-teal-500">Scanners</span>
        <span className="cursor-pointer hover:text-teal-500">Basic Backtest</span>
        <span className="cursor-pointer hover:text-teal-500">Advanced Backtest</span>
        <span className="cursor-pointer hover:text-teal-500">Pricing</span>
        <span className="cursor-pointer hover:text-teal-500">My Earning</span>
       
       </div>


     
       <div className={clsx('Navigation-Menu py-3 gap-6 text-zinc-600 font-medium dark:text-zinc-200 dark:font-normal xl:hidden transition-all duration-700 ease-in-out', showMobileView ? 'flex flex-col slide-down' : 'hidden')}>
        <span  className="cursor-pointer  hover:text-teal-500">LeaderBoard</span>
       
            <div className="flex flex-row items-center justify-between cursor-pointer "  onClick={handledropdown}>
        <span className="cursor-pointer  hover:text-teal-500">Historical Trading</span>
        < ChevronDown size={20}  className=" relative  right-3"/>
        </div>
         <div className={clsx(' dark:bg-black  bg-white border dark:border-gray-500  border-gray-300  dark:shadow-none shadow-sm w-full rounded-lg transition-all duration-1000  ease-in-out' ,dropDown ? 'flex flex-col':'hidden')}>
          <div className=" flex m-5 flex-col gap-2 slide-down">
          <span>Trading</span>
          <span>Order</span>
          <span>Holding</span>
          <span>Position</span>
          </div>
         
         </div>
           
          
       
       
        <span className="cursor-pointer hover:text-teal-500">Historical Chart</span>
        <span className="cursor-pointer hover:text-teal-500">Scanners</span>
        <span className="cursor-pointer hover:text-teal-500">Basic Backtest</span>
        <span className="cursor-pointer hover:text-teal-500">Advanced Backtest</span>
        <span className="cursor-pointer hover:text-teal-500">Pricing</span>
        <span className="cursor-pointer hover:text-teal-500">My Earning</span>
       
       </div>

    </div>
  )
}

export default Navbar
