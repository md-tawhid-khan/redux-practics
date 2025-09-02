import App from "@/App";



import { createBrowserRouter } from "react-router-dom";

const Routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            
        ]
    },
   
])

export default Routes