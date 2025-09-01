
import { AddTaskModal } from "@/components/modules/tasks/addTaskModal"
import TaskCard from "@/components/modules/tasks/taskCard"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  selectTasks, updateFilter } from "@/redux/features/tasks/tasksSlice"
import {  useAppDispatch, useAppSelector } from "@/redux/hook"



const Tasks=()=>{

    const tasks=useAppSelector(selectTasks) ;

    const dispatch=useAppDispatch()


    return (  
    <div className="flex flex-col gap-5">
    <div className="flex justify-end gap-5 items-center">
        <h1 className="mr-auto">tasks</h1>
       <Tabs defaultValue="All">
        <TabsList className="gap-5">
          <TabsTrigger onClick={()=>dispatch(updateFilter("All"))} value="All">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("Medium"))} value="Medium">Medium </TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
        </TabsList>
         </Tabs>

        <AddTaskModal/>
        </div>
        <div>
            {
            tasks.map((task)=>(<TaskCard task={task} key={task.id}/>))
            }
        </div>
    </div> )
}
export default Tasks