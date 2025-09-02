import type { IUser } from "@/interface/interface";
import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface  IinitialState{
    users:IUser[]
}

const initialState:IinitialState={
    users:[
        {
            id:"00012",
        userName:"tawhid"
    },      
]
}




const createUser=(addUser:{userName:string})=>{
  return {id:nanoid(),...addUser}
}

const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
     addUser:(state,action:PayloadAction<IUser>)=>{
        const userData=createUser(action.payload)
        state.users.push(userData)
     },
     removeUser:(state,action:PayloadAction<string>)=>{
        state.users = state.users.filter(user=>user.id !== action.payload)
     }
    }
})

export const {addUser,removeUser} = usersSlice.actions ;

export const selectUsers=(state:RootState)=>{
     return state.user.users
}



export default usersSlice.reducer