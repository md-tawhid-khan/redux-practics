
import { Outlet } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Tasks from "./components/pages/tasks/tasks"
import { useGetTasksQuery } from "./redux/api/baseApi"


function App() {

  const {data,isLoading,isError}=useGetTasksQuery(undefined) ;

  console.log({data,isLoading,isError})

  if(isLoading){
    return <>loading .............</>
  }



  return (
    <div className="mx-16 flex flex-col gap-4">
     <Navbar/>
     <Tasks/>
     <Outlet/>
    </div>
  )
}

export default App

