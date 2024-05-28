import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MdOutlineShowChart } from "react-icons/md";
function Leaderboard() {
  // Correctly destructure the state and its setter function
  const [slippage, setSlippage] = useState<string>("0%");

  return (
    <div className="flex bg-white mx-20 border-none dark:bg-neutral-950 shadow-2xl dark:shadow-sm dark:shadow-zinc-500 shadow-gray-400 h-auto rounded-lg">
      <div className="flex w-full flex-col mx-4 gap-4 mb-3">
        <div className="w-full heading flex py-3 flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-medium">Basic Backtest</h1>
            <span className=" text-muted-foreground  text-sm md:text-base">More than 1000 of Backtest Created (Showing them On ranklist)</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex gap-1 items-center">
                <span className="  text-base md:text-lg ">slippage</span>
                <span className="text-vtlineColour">|</span>
                <div className="w-10 flex">
                    <div className=" flex flex-row  items-center gap-1">
                    <span>{slippage}</span>
                  < ChevronDown/>
                    </div>
                  
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSlippage("0%")}>0%</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSlippage("0.5%")}>0.5%</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSlippage("1%")}>1%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <table>
            <thead className=" dark:text-zinc-300  border-b-2  border-borderColor dark:border-dakborderColor  font-bold dark:font-medium">
            <tr >
                <th className=" xl:p-3    lg:p-2 p-1   text-sm tracking-wide  text-left">Rank</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Name</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Calmar Ratio</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Overall Profit</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Avg.Daily Profit</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Win %(Day)</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Price (Rs)</th>
                <th className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">Action</th>
               
            </tr>
          
            </thead>
            <tbody className="   text-zinc-500  dark:text-zinc-300 font-medium dark:font-normal">
           
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">1</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">Selling with re entr</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.96</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">381845</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">319.54</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.65</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400   dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">2</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	strategy_name</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.62</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	268872.5</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">216.31</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.64</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">500</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400  dark:font-medium  text-blue-600 font-bold   tracking-wide text-left ">Buy</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">3</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	Based on premium and</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.42</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">255425</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">208.51</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.64</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3   cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400   dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">4</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	strategy_name</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.22</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">370845</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">303.47</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.65</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400   dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">5</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">strategy_name</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.22</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">370845</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">303.47</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.65</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400  dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">6</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	Based on premium wit</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>3.01</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">135980</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">185.77</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">	0.49</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3   cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400  dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">7</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	strategy_name</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>2.76</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	267867.5</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">218.49</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.6</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400   dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">8</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	Wait and trade_Save</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>2.76</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">178252.5</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">161.9</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.63</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400  dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">9</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">iron condor</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>2.44</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	176420</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">137.51</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.65</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400   dark:font-medium text-blue-600 font-bold   tracking-wide text-left ">View</td>
                </tr>
                <tr>
                    <th className=" xl:p-3   lg:p-2 p-1   text-sm    font-semibold tracking-wide text-left ">10</th>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">	strategy_name</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left"><span className=" flex flex-row items-center gap-2"><MdOutlineShowChart className=" text-green-400"/>2.04</span></td>
                    
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left ">244555</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">198.66</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide text-left">0.62</td>
                    <td className=" xl:p-3   lg:p-2 p-1   text-sm  tracking-wide  text-left">-</td>
                    <td className=" xl:p-3  cursor-pointer  lg:p-2 p-1   text-sm   dark:text-blue-400  text-blue-600 font-bold   dark:font-medium  tracking-wide text-left ">View</td>
                </tr>
            </tbody>
        </table>
      
       
       
      </div>
    </div>
  );
}

export default Leaderboard;
{/* <div className="topItem   flex flex-row  justify-between font-medium items-center ">
<span>Rank</span>
<span>Name</span>
<span>Calmar Ratio</span>
<span>Overall Profit</span>
<span>Avg.Daily Profit</span>
<span>Win %(Day)</span>
<span>Price (Rs)</span>
<span>Action</span>
</div> */}
