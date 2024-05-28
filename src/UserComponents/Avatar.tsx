import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    LogOut,
    User,
    Coins,
    KeyRound,
    HandCoins,
  } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
  export function AvatarDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut >⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Coins className="mr-2 h-4 w-4" />
            <span>Earnings</span>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HandCoins className="mr-2 h-4 w-4" />
            <span>Funds</span>
           
          </DropdownMenuItem>
          <DropdownMenuItem>
            <KeyRound className="mr-2 h-4 w-4" />
            <span>Change Password</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>

           
        </DropdownMenu>
      
    )
  }
  