import type { RootState } from "@/redux/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[
        {
            id:"00012",
        userName:"tawhid"
    }
]
}

const createUser=(addUser)=>{
  return {id:nanoid(),...addUser}
}

const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
     addUser:(state,action)=>{
        const userData=createUser(action.payload)
        state.users.push(userData)
     }
    }
})

export const {addUser} = usersSlice.actions ;

export const selectUsers=(state:RootState)=>{
     return state.user.users
}

export default usersSlice.reducer