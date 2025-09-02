import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const BaseApi=createApi({
    reducerPath:"baseApi",
     baseQuery:fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
      tagTypes:['tasks'],
      endpoints:(builder)=>({

        getTasks:builder.query({
            query:()=>'/tasks',
            providesTags: ['tasks'],
        }),


        createTasks:builder.mutation({
            query:(addTask)=>({
                url:"/tasks",
                method:"POST",
                body:addTask
            }),
             invalidatesTags: ['tasks'],
        })

      })
})

export const {useGetTasksQuery,useCreateTasksMutation}=BaseApi