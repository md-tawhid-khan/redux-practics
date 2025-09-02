import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter,DialogTrigger } from "@/components/ui/dialog"
import {  Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { addUser } from "@/redux/features/users/usersSlice"

import { useAppDispatch } from "@/redux/hook"
import { useForm } from "react-hook-form"

const UsersModal=()=>{
    const form=useForm()

    const dispatch=useAppDispatch()



    return (<>
         <Dialog>
      <form >
        <DialogTrigger asChild>
          <Button >Create User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit((values)=>dispatch(addUser(values)))} >
  <FormField
    control={form.control}
    name="userName"
    render={({ field }) => (
      <FormItem>
        <FormLabel>User Name</FormLabel>
        <FormControl>
          <input {...field} className="border p-2 rounded" />
        </FormControl>
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
    </>
    )
}

export default UsersModal ;