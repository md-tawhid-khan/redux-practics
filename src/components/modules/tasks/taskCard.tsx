import { Trash2 } from "lucide-react"
import {Checkbox} from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import type { ITask } from "@/interface/interface"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { deleteTasks, toggleCompleteStates } from "@/redux/features/tasks/tasksSlice"
import { selectUsers } from "@/redux/features/users/usersSlice"

interface IProps{
    task:ITask
}

const TaskCard=({task}:IProps)=>{

    const dispatch=useAppDispatch() ;
    const users=useAppSelector(selectUsers)

     const assignToUsers=users.find(user=>user.id===task.assignTo);

    return (
    <>
    <div className="border py-5 rounded-md p-5">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className={cn("size-3 rounded-full", {
                    "bg-green-500":task.priority==="Low",
                    "bg-yellow-500":task.priority==="Medium",
                    "bg-red-500":task.priority==="High",
                }
                )}></div>
                <h1 className={cn({"line-through":task.isComplete})} >{task.title}</h1>                
                               
            </div>
            
            <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(deleteTasks(task.id))} variant="link" className="p-0 text-red-500">
                        <Trash2/>
                         </Button>
                         <Checkbox onClick={()=>dispatch(toggleCompleteStates(task.id))}/>
                </div>
        </div>
         <h1>name : {assignToUsers ? assignToUsers?.userName:"no one"}</h1> 
        <p className="mt-5">{task.description}</p>
    </div>
    </>
    )
}

 export default TaskCard