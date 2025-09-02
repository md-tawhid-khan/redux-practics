import type { IUser } from "@/interface/interface";
import { removeUser } from "@/redux/features/users/usersSlice";
import { useAppDispatch } from "@/redux/hook";
import { MdDeleteOutline } from "react-icons/md";

interface IProps{
    user:IUser
}

const UserCard=({user}:IProps)=>{

    const {id,userName}=user ;

    

    const dispatch = useAppDispatch()

    return (<div className="flex justify-between items-center ">
        <div className="flex flex-col gap-4 py-4 pl-4">
            <h1>UserId: <span className="text-orange-500">{id}</span>  </h1>
            <h1>UserName: <span className="text-purple-500"> {userName} </span> </h1>
        </div>
        <div className="pr-5">
            <button onClick={()=>dispatch(removeUser(id))} >
                <MdDeleteOutline />
            </button>
            
        </div>
        </div>
    )
}

export default UserCard