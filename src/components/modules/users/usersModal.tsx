import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter,DialogTrigger } from "@/components/ui/dialog"
import {  Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

import { addUser } from "@/redux/features/users/usersSlice"

import { useAppDispatch } from "@/redux/hook"
import { useState } from "react"
import { useForm } from "react-hook-form"

const UsersModal=()=>{

  type TAddFieldValues={
    userName:string ;
    id:string ;
  }

  const [open,setOpen]=useState(false)

    const form=useForm<TAddFieldValues>()

    const dispatch=useAppDispatch()



    return (<>
         <Dialog open={open} onOpenChange={setOpen}>
      <form >
        <DialogTrigger asChild>
          <Button >Create User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          
        <Form {...form}>
            <form onSubmit={form.handleSubmit((values :TAddFieldValues )=>{
              dispatch(addUser(values))
              form.reset()
              setOpen(false)
              })} >
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