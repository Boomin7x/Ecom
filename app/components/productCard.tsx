import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { IInitialState } from "../store/main-store";

const ProductCard = ({items}:{items:IInitialState}) => {
  return <Card className="w-1/4">
  <CardHeader className=" ">
    <CardTitle>{items?.name}</CardTitle>
    <CardDescription className="text-ellipsis ">{items?.description}</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col items-center justify-center">
    <Image width={509} height={509} src={items?.image} alt="" unoptimized className="h-[12rem] w-auto" />
    <p className="text-muted-foreground">$ {items?.price}</p>
  </CardContent>
  <CardFooter className="gap-2 justify-start">
    <Button className="gap-1" size='icon' > <Plus className="w-4 h-4" /> </Button>
    <Button className="gap-1" size='icon' variant='destructive' > <Minus className="w-4 h-4" /> </Button>
  </CardFooter>
</Card>

};

export default ProductCard;
