import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useStore from "../store/main-store";

  interface IModal{
    open:boolean;
    onClose:()=>void;
  }
  const AddProducts = ({open, onClose}:IModal) => {

    const { addProduct } = useStore()

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)

const inputFiels = [
    {
        label: "Product Name",
        type: "text",
        placeholder: "Product Name",
        value:name,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
        description:"Product name must be longer that 3 characters"
    },
    {
        label: "Product Image",
        type: "text",
        placeholder: "Product Image",
        value:image,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value),
        description:"Product image must be a url"
    },
    {
        label: "Product Description",
        type: "text",
        placeholder: "Product Description",
        value:desc,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value),
        description:"Product description must be longer that 3 characters"
    },
    {
        label: "Product Price",
        type: "number",
        placeholder: "Product price",
        value:price,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value)),
        description:"Product price must be a number"
    },
]

    return <Dialog open={open} onOpenChange={onClose} >

        
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add a new Product</DialogTitle>
        <DialogDescription>
          This form adds a new product
        </DialogDescription>
      </DialogHeader>
      <div className="py-4 flex flex-col gap-6">
        {
            inputFiels?.map((item) => (
                <div key={item?.label} className="flex flex-col gap-1">
                <p className="text-sm">{item?.label}</p>
                <Input value={item?.value} onChange={item?.onChange} type={item.type} placeholder={item.placeholder}  />
                <p className="text-[small] text-muted-foreground">{item?.description}</p>
            </div>
            ))
        }
      
        </div>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={()=>{
            addProduct({
                name,
                image,
                description:desc,
                price
            })
            onClose()
        }}>Continue</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  }

  export default AddProducts;