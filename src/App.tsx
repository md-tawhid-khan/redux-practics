
import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"


function App() {



  return (
    <div className="mx-16 flex flex-col gap-4">
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App

