import UserCard from "@/components/modules/users/userCard"
import UsersModal from "@/components/modules/users/usersModal"
import { selectUsers } from "@/redux/features/users/usersSlice"
import { useAppSelector } from "@/redux/hook"

const Users=()=>{
 
    const users=useAppSelector(selectUsers)
    
    return (<>
    <div className="flex justify-end items-center">
     <h1 className="mr-auto">this is user page</h1>
      <UsersModal/>
      
    </div>
    <div className="border-2">
          {
            users.map(user=><UserCard user={user}/>)
          }
      </div>
   
    </>)
}

export default Users