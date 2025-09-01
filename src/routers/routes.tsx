import App from "@/App";
import Login from "@/login/login"
import Tasks from "@/components/pages/tasks/tasks";
import Users from "@/components/pages/users/users";

import { createBrowserRouter } from "react-router-dom";

const Routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Tasks/>
            },
            {
                path:'/tasks',
                element:<Tasks/>
            },
            {
                path:'/users',
                element:<Users/>
            },
        ]
    },
   
])

export default Routes