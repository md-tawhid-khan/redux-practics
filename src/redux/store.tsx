import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import tasksReducer from "./features/tasks/tasksSlice"
import usersReducer from "./features/users/usersSlice"
 

export const store=configureStore({
    reducer:{
       counter:counterReducer ,
       todo: tasksReducer,
       user: usersReducer
    },   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
