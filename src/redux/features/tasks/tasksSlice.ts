
import type { ITask } from "@/interface/interface";
import type { RootState } from '@/redux/store';
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState{
    tasks:ITask[],

    filter:"All"|"Medium"|"Low"|"High"
}

const initialState:InitialState=
{
 tasks:[
    { 
        id:"00001",
        title: "redux tool kit",
  description:"it is very helpful for developing",
  dueDate: "2025-12",
  isComplete: false,
  priority: "High"}
 ],

 filter:"All"

}

    type DraftTasks =Pick<ITask,'title'|'description'|'dueDate'|'priority'>

    const createTasks=(addTask:DraftTasks):ITask=>{
 return {id:nanoid(),isComplete:false,...addTask}
    }

const tasksSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<ITask>)=>{
           
            const taskData=createTasks(action.payload)
           state.tasks.push(taskData)
        },
        toggleCompleteStates:(state,action:PayloadAction<string>)=>{
             state.tasks.forEach(task=>task.id===action.payload ? task.isComplete=!task.isComplete:task)
        },
        deleteTasks:(state,action:PayloadAction<string>)=>{
         state.tasks =state.tasks.filter(task=>task.id !== action.payload)
        },
        updateFilter:(state,action:PayloadAction<"All"|"High"|"Medium"|"Low">)=>{
            state.filter=action.payload
        }
    }
})

export const {addTask,toggleCompleteStates,deleteTasks,updateFilter}=tasksSlice.actions

export const selectTasks=(state:RootState)=>{
    const filter=state.todo.filter
    if(filter==="High"){
    return    state.todo.tasks.filter(task=>task.priority==="High")
    }
    else if(filter==="Medium"){
    return    state.todo.tasks.filter(task=>task.priority==="Medium")
    }
    if(filter==="Low"){
    return    state.todo.tasks.filter(task=>task.priority==="Low")
    }
    else{
        return  state.todo.tasks
    }
 
  };

export const selectFilter=(state:RootState)=>{
    return state.todo.tasks
} ;

export default tasksSlice.reducer