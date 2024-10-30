"use client";
import AnimateSlideIn from "@/app/components/animate/AnimateSlideIn";
import { cn } from "@/lib/utils";
import { Blocks, BookOpen, Cable, LampDesk, Shirt } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryPage = () => {
  const Categories = [
    {
      icon: Cable,
      name: "Electronics",
      link: "/category/electronics",
    },
    {
      name: "Clothing",
      icon: Shirt,
      link: "/category/Clothing",
    },
    {
      name: "Furniture",
      icon: LampDesk,
      link: "/category/Furniture",
    },
    {
      name: "Toys and Hobbies",
      icon: Blocks,
      link: "/category/Toys-and-Hobbies",
    },
    {
      name: "Books - Stationery",
      icon: BookOpen,
      link: "/category/Books-and-Stationery",
    },
  ];
  const backgroundGradients = [
    "bg-gradient-to-r from-orange-500 light:via-red-50 dark:to-background ",
    "bg-gradient-to-r from-blue-500 light:via-indigo-50 dark:to-background",
    "bg-gradient-to-r from-indigo-500 dark:to-background",
  ];

  const { push } = useRouter();
  return (
    <div className="py-24">
      <div className=" flex flex-col items-center py-24">
        <h2 className="text-4xl font-[600] tracking-tighter">
          <span className="text-destructive">Ca</span>tegories /{" "}
          <span className="text-destructive">Co</span>llections
        </h2>
        <p className="text-muted-foreground w-1/3 text-center mt-6">
          Explore our diverse categories and collections, each carefully curated
          to meet your needs. From fresh produce to cutting-edge technology, we
          have it all. Shop now and discover the perfect products for your
          lifestyle. ✨
        </p>

        <div>
          <AnimateSlideIn dir="left" className="container px-8">
            <div className="w-full grid grid-cols-4 gap-2 justify-center   mt-16">
              {Categories.slice(0, 4).map((item, i) => (
                <div
                  key={item?.name}
                  onClick={() => push(item?.link)}
                  className={cn(
                    "flex h-full cursor-pointer   relative items-center overflow-hidden hover:bg-background transition-all ease-in-out duration-700   hover:shadow-lg flex-col border rounded-3xl justify-center  p-8",
                    backgroundGradients[i % backgroundGradients.length]
                  )}
                >
                  <item.icon className="h-auto w-1/2 text-neutral-400 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 -rotate-[45deg] dark:text-neutral-200" />
                  <div className="w-full h-full relative">
                    <p className="text-xl font-bold">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center   mt-16">
              {Categories.slice(4).map((item, i) => (
                <div
                  key={item?.name}
                  className={cn(
                    "flex h-full cursor-pointer   relative items-center overflow-hidden hover:bg-background transition-all ease-in-out duration-700   hover:shadow-lg flex-col border rounded-3xl justify-center  p-8",
                    backgroundGradients[(i % backgroundGradients.length) + 1]
                  )}
                >
                  <item.icon className="h-auto w-1/2 text-neutral-400 absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 -rotate-[45deg] dark:text-neutral-200" />
                  <div className="w-full h-full relative">
                    <p className="text-xl font-bold">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateSlideIn>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
