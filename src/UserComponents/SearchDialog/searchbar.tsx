import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CommandIcon } from "lucide-react";

function Searchbar() {
    const closeDialog = () => {
        const closeButton = document.getElementById("dialog-close-button");
    
        if (closeButton) closeButton.click();
      };
      const handleKeyDown =(e:any)=>{
                if(e.key=="Enter"){
                    closeDialog();
                }
      }
    
  return (
    <div className="Search-btn ">
       <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline"
            className="border  h-12  inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200  overflow-hidden"
          >
            <div className=" flex items-center justify-center  gap-3 sm:gap-0 sm:justify-between w-full">
            <p className="text-sm text-muted-foreground "> Search by Name / Search by Order </p>
            <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm sm:ml-[10rem] flex items-center gap-2 ">
              <CommandIcon  size={20} />
              <span className="text-[12px]">L</span>
            </div>
            </div>
           
          </Button>
        </DialogTrigger>

        <DialogContent className="p-0 content1">
          <Command className=" rounded-lg border shadow-md ">
            <CommandInput 
            onKeyDownCapture={handleKeyDown}
              placeholder="Type a Name or Order..."
            />
            <CommandList>
              <ul className="px-3 pb-2">
                <p className="p-2 text-sm text-muted-foreground">Recent Search</p>

               
              </ul>
           
            </CommandList>
          
          </Command>
        </DialogContent>
        {/* DialogClose component with an ID to access it programmatically */}
        <DialogClose id="dialog-close-button" />
      </Dialog>
    </div>
  )
}

export default Searchbar;
