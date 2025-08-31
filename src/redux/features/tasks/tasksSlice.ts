
import type { ITask } from "@/interface/interface";
import type { RootState } from '@/redux/store';
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    task:ITask[],
    filter:"All"|"Medium"|"Low"
}

const initialState:InitialState={
 task:[{
    id:"00012",
    title:"complete tasks",
    description:"thpsd hfsdsi hgfsoif hgdfdgo",
    dueDate:"2025-10",
    isComplete:false,
    priority:'High'
    },
    {
    id:"00012",
    title:"multiple tasks",
    description:"thpsd hfsdsi hgfsoif hgdfdgo",
    dueDate:"2025-10",
    isComplete:false,
    priority:'Low'
    }
],

    filter:"All"

    }


const tasksSlice=createSlice({
    name:'task',
    initialState,
    reducers:{}
})

export const selectTasks=(state:RootState)=>state.tasks.task ;
export const selectFilter=(state:RootState)=>state.tasks.filter

export default tasksSlice.reducer