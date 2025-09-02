
import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Tasks from "./components/pages/tasks/tasks"



function App() {

  



  return (
    <div className="mx-16 flex flex-col gap-4">
     <Navbar/>
     <Tasks/>
     <Outlet/>
    </div>
  )
}

export default App

