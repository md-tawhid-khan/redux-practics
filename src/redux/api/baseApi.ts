import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseApi=createApi({
    reducerPath:"baseApi",
     baseQuery:fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
      endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=>'/tasks'
        })
      })
})

export const {useGetTasksQuery}=BaseApi