import { ThemeProvider } from "@/components/theme-provider"
import Heading from "./UserComponents/Heading"
import Navbar from "./UserComponents/Navbar/Navbar"
import ImgLayer from "./UserComponents/DesignLayer/imgLayer"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" flex  flex-col h-full w-full min-w-[42rem]   dark:bg-bgColour">
        <div className="flex   bg-white  w-full  dark:bg-neutral-950">
        <Heading/>
        </div>
        <hr className=" bg-borderColor dark:bg-dakborderColor"/>
        <div className="flex  w-full   bg-white dark:bg-neutral-950 ">
        <Navbar/>
        </div>
        <hr className=" bg-borderColor dark:bg-dakborderColor"/>
       <div >
        <ImgLayer/>
       </div>
       
      </div>
    
    </ThemeProvider>
  )
}

export default App
