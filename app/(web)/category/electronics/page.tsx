import React, { FC, HTMLAttributes } from "react";
import electronics from "../../utils/Category/Electonics";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimateSlideIn from "@/app/components/animate/AnimateSlideIn";

const bgColor = ["bg-muted", "bg-background"];
const animateSlideIn: ("left" | "right" | "bottom" | "top")[] = [
  "left",
  "right",
];

const Electronics = () => {
  return (
    <div className="  my-6 h-full">
      <div className=" w-full h-full">
        <h2 className="container mx-auto text-center py-6 px-8 text-4xl tracking-tighter font-[600]">
          {electronics.name}
        </h2>
        <div className="flex flex-col gap-3">
          {electronics.items.map((item, i) => (
            <AnimateSlideIn
              dir={animateSlideIn[i % animateSlideIn.length]}
              key={item?.name}
              className={cn("py-8", bgColor[i % bgColor.length])}
            >
              <div className="flex flex-col gap-4 container mx-auto px-8">
                <h2 className=" font-[600] text-2xl tracking-tight ">
                  <span className="bg-destructive text-background  pl-6">
                    {item?.name?.charAt(0).toUpperCase() +
                      item?.name?.slice(1, 2)}
                  </span>
                  {item?.name?.slice(2)?.replaceAll("_", " ")}
                </h2>
                <div className="grid grid-cols-4 gap-4 ">
                  {item?.items.slice(0, 4).map((item) => (
                    <div
                      key={item?.name}
                      className="flex w-full capitalize h-full font-bold hover:border hover:bg-background py-6 rounded-3xl hover:shadow-xl flex-col gap-4 items-center justify-center"
                    >
                      {item?.image && (
                        <div className="h-[10rem] w-[10rem] flex items-center justify-center rounded-3xl border overflow-hidden">
                          <ImageComponent
                            src={item?.image as string}
                            className=" h-full w-auto object-cover  "
                          />
                        </div>
                      )}
                      <p className="w-2/3 text-center mx-auto">{item?.name}</p>
                      <p className="font-normal  text-sm text-muted-foreground text-center px-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore sapiente
                      </p>
                      <Button variant="secondary">Icon</Button>
                    </div>
                  ))}
                </div>
                <div>{item?.items.length > 4 && "See more"}</div>
              </div>
            </AnimateSlideIn>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IImageComponent {
  src: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
}
const ImageComponent: FC<IImageComponent> = ({ src, className }) => {
  return (
    <Image
      src={src}
      alt="Image"
      width={500}
      height={500}
      unoptimized
      className={className}
    />
  );
};

export default Electronics;
