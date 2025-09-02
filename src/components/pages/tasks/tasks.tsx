import { Button } from "@/components/ui/button";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCreateTasksMutation, useGetTasksQuery } from "@/redux/api/baseApi";

const Tasks=()=>{
    
    const {data,isLoading,isError}=useGetTasksQuery(undefined,{
        pollingInterval:5000,
        refetchOnFocus:true,
        refetchOnMountOrArgChange:true,
        refetchOnReconnect:true,
    }) ;


    console.log(data)

    const [createTask,{data:createTasksData}]=useCreateTasksMutation() ;

       const pushCreateTaskData=async()=>{
      const res=await  createTask({
            id:"000012",
            description:"it is very helpful",
            title:"react",
            isComplete:false,
            dueDate:"2025-2-2",
            priority:"high"
        }).unwrap();

        console.log({res})
       }

       console.log({createTasksData})

 

  if(isLoading){
    return <>loading .............</>
  }


    return (  
    <div className="flex flex-col gap-5">
    <div className="flex justify-end gap-5 items-center">
        <Button onClick={()=>pushCreateTaskData()} className="mr-auto">creat tasks</Button>
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