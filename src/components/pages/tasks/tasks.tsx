import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tasks=()=>{
    return (  
    <div className="flex flex-col gap-5">
    <div className="flex justify-end gap-5 items-center">
        <h1 className="mr-auto">tasks</h1>
       <Tabs defaultValue="All">
        <TabsList className="gap-5">
          <TabsTrigger  value="All">All</TabsTrigger>
          <TabsTrigger  value="High">High</TabsTrigger>
          <TabsTrigger  value="Medium">Medium </TabsTrigger>
          <TabsTrigger value="Low">Low</TabsTrigger>
        </TabsList>
         </Tabs>

    
        </div>
        <div>
            
        </div>
    </div> )
    
}

export default Tasks