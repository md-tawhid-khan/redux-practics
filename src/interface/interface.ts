 export interface ITask{
     id: string ;
  title: string ;
  description: string ;
  assignTo:string|null ;
  dueDate: string ;
  isComplete: boolean ;
  priority: "High"|"Medium"|"Low"  ;
 }

 export interface IUser{
    id:string ;
    userName:string ;
 }