import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel,  } from "@/components/ui/form"
import { useForm } from "react-hook-form"


export function AddTaskModal() {

    const form=useForm()

    const onSubmit=(data)=>{
        console.log(data)
    }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button >Add Tasks</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
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
        <FormLabel />
        <FormControl>
         <input {...field}/>   
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
  )
}
