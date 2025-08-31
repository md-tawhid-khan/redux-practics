
import { AddTaskModal } from "@/components/modules/tasks/addTaskModal"
import TaskCard from "@/components/modules/tasks/taskCard"
import {  selectTasks } from "@/redux/features/tasks/tasksSlice"
import { useAppSelector } from "@/redux/hook"


const Tasks=()=>{

    const tasks=useAppSelector(selectTasks)
  

    console.log(tasks)
   

    return <div>
    <div className="flex justify-between items-center">
        <h1>tasks</h1>
        <AddTaskModal/>

        </div>
        <div>
            {
            tasks.map((task)=>(<TaskCard task={task}/>))
            }
        </div>
    </div>
}
export default Tasks