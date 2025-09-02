import Logo from "@/assets/logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../modelToggle/model-toggle";
import { Button } from "../ui/button";


export default function Navbar() {
    return (
        <nav className=" mt-5  flex justify-between ">
            <div className="flex items-center gap-3">               
               <Logo/> <p><span className="font-bold text-purple-600">Test</span>Master</p>
               <Button>tasks</Button> <Button>users</Button> 
                       
            </div>
            <div>
                <ModeToggle/>
            </div>

            
        </nav>
    )
}