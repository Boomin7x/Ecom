"use client";
import React, { FC, HTMLAttributes } from "react";
import { ICategoryData } from "../../utils/Category/Fasion";
import AnimateSlideIn from "@/app/components/animate/AnimateSlideIn";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Props extends ICategoryData {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
//added cat2 td

const bgColor = ["bg-muted", "bg-background"];
const animateSlideIn: ("left" | "right" | "bottom" | "top")[] = [
  "left",
  "right",
];

const CategoryTemplate = ({ items, name }: Props) => {
  const { theme } = useTheme();
  return (
    <div className=" w-full h-full">
      <h2 className="container mx-auto text-center py-6 px-8 text-4xl tracking-tighter font-[600]">
        {name} {theme === "dark" ? "dark" : "light"}
      </h2>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
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
                {item?.items.slice(0, 4).map((category) => (
                  <Link
                    href={
                      "/category/" +
                      name.toLocaleLowerCase() +
                      "/" +
                      item?.name.toLocaleLowerCase() +
                      "/" +
                      encodeURIComponent(category?.name)
                    }
                    key={category?.name}
                    className="flex w-full capitalize h-full font-bold hover:border hover:bg-background py-6 rounded-3xl hover:shadow-xl flex-col gap-4 items-center justify-center"
                  >
                    {category?.image && (
                      <div className="h-[10rem]  flex items-center justify-center   overflow-hidden">
                        <ImageComponent
                          src={category?.image as string}
                          className=" h-full w-auto object-cover  "
                        />
                      </div>
                    )}
                    <p className="w-2/3 text-center mx-auto">
                      {category?.name}
                    </p>
                    <p className="font-normal  text-sm text-muted-foreground text-center px-10">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore sapiente
                    </p>
                    <Button variant="secondary">Icon</Button>
                  </Link>
                ))}
              </div>
              <div>{item?.items.length > 4 && "See more"}</div>
            </div>
          </AnimateSlideIn>
        ))}
      </div>
    </div>
  );
};

export interface IImageComponent {
  src: string;
  className?: HTMLAttributes<HTMLImageElement>["className"];
}
export const ImageComponent: FC<IImageComponent> = ({ src, className }) => {
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

export default CategoryTemplate;
