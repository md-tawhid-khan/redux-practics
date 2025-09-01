import { MdDeleteOutline } from "react-icons/md";
const UserCard=({user})=>{
    const {id,userName}=user ;
    return (<div className="flex justify-between items-center ">
        <div className="flex flex-col gap-4 py-4 pl-4">
            <h1>UserId: <span className="text-orange-500">{id}</span>  </h1>
            <h1>UserName: <span className="text-purple-500"> {userName} </span> </h1>
        </div>
        <div className="pr-5">
            <button>
                <MdDeleteOutline />
            </button>
            
        </div>
        </div>
    )
}

export default UserCard