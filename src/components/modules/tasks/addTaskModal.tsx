import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  
  DialogDescription,
  
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel,  } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent,  SelectItem,  SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { ITask } from "@/interface/interface"
import { cn } from "@/lib/utils"
import { addTask } from "@/redux/features/tasks/tasksSlice"
import { selectUsers } from "@/redux/features/users/usersSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"


import { useForm,  type FieldValues, type SubmitHandler } from "react-hook-form"


export function AddTaskModal() {
 const users=useAppSelector(selectUsers)
    const form=useForm()
    const dispatch=useAppDispatch()

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        console.log(data)
        dispatch(addTask(data as ITask))
    }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button >Add Tasks</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only"> fill up this form to add task </DialogDescription>
          <DialogHeader>
            <DialogTitle>Add Tasks</DialogTitle>
          </DialogHeader>
          <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)}>
     <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel >title</FormLabel>
        <FormControl>
         <input {...field} value={field.value || ""}/>   
        </FormControl>
        
      </FormItem>
    )}
  />         
     <FormField
    control={form.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel >description</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ""}/>   
        </FormControl>
        
      </FormItem>
    )}
  />         
     <FormField
    control={form.control}
    name="assignTo"
    render={({field}) => (
      <FormItem>
        <FormLabel>User name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select user" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    users.map(user=><SelectItem value={user.id}>{user.userName}</SelectItem>)
                  }
                  
                </SelectContent>
              </Select>
        
      </FormItem>
    )}
  />         
         <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}                   
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              
              
            </FormItem>
          )}
        />
         
     <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
           
<DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
  </form>
   
          
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
