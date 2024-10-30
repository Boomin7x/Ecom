"use client";
import AnimateSlideIn from "@/app/components/animate/AnimateSlideIn";
import Marquee from "@/app/components/animate/Marquee";
import { Button } from "@/components/ui/button";
import {
  Blocks,
  BookOpen,
  Cable,
  LampDesk,
  LibraryBig,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { push } = useRouter();
  const bestSellingProds = [
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9000912c-87ca-4d61-b0bd-e112ec75a7ac.jpg",
      name: "Alienware - Dual Mode Wireless Gaming Headset",
      price: "$299.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6601/6601524_sd.jpg",
      name: "Sony - PlayStation 5 Pro Console",
      price: "$699.99",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c379ba4c-68af-4410-95ba-c739979192f7.jpg",
      name: "Apple - iPhone 16 Pro Max 256GB ",
      price: "$33.33/mo.",
    },
    {
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6582/6582705_sd.jpg",
      name: "Avata 2 Fly More Combo  ",
      price: "$1,049.99",
    },
  ];

  const Categories = [
    {
      icon: Cable,
      name: "Electronics",
      link: "/categories/Electronics",
    },
    {
      name: "Clothing",
      icon: Shirt,
      link: "/categories/Clothing",
    },
    {
      name: "Furniture",
      icon: LampDesk,
      link: "/categories/Furniture",
    },
    {
      name: "Toys and Hobbies",
      icon: Blocks,
      link: "/categories/Toys-and-Hobbies",
    },
    {
      name: "Books and Stationery",
      icon: BookOpen,
      link: "/categories/Books-and-Stationery",
    },
  ];
  return (
    <>
      <div className="w-full h-[95vh] flex overflow-hidden flex-col items-center py-16 gap-12 ">
        <div className="flex flex-col items-center py-8 gap-4 ">
          <div className="flex flex-col items-center gap-4 text-6xl">
            <h2 className="font-[600] tracking-tighter">
              Boomin <span className="text-destructive">Su</span>per Market
            </h2>
            <div className="h-[2px] w-1/2 bg-foreground/40" />
          </div>
          <p className="text-muted-foreground">
            Your One-Stop Shop for Everything Fresh and Fabulous!
          </p>
        </div>

        <div className="w-1/3 -mt-8 text-center text-lg tracking-tight font-[500]">
          {` offers a wide range of products, from fresh groceries to the latest
        gadgets and stylish home decor. Known for competitive prices and
        exceptional customer service, it's the ultimate one-stop shop for all
        your needs. 🛒✨`}
        </div>

        <AnimateSlideIn
          dir="top"
          className="flex items-center h-fit w-full  justify-center"
        >
          <Image
            height={100}
            width={100}
            src={"/siteProd.png"}
            alt=""
            unoptimized
            className="w-3/4 h-auto shadow-2xl border rounded-3xl"
          />
        </AnimateSlideIn>
      </div>
      <div className="bg-muted flex flex-col items-center py-24 bg-mutedx">
        <h2 className="text-4xl font-semibold tracking-tighter">
          Featured Products
        </h2>
        <p className="w-1/3 text-center py-4 text-muted-foreground">
          Here are some of the best-selling products at Boomin Super Market:{" "}
        </p>

        <AnimateSlideIn dir="right" className="container px-8">
          <div className="flex w-full gap-4">
            {bestSellingProds.map((item) => (
              <div
                key={item?.name}
                className="flex flex-col border bg-background  rounded-xl w-1/4 items-center py-8 gap-4"
              >
                <div className=" flex-grow flex flex-col items-center justify-center">
                  <Image
                    width={509}
                    height={509}
                    src={item?.image}
                    alt=""
                    unoptimized
                    className="h-[12rem] w-auto object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-muted-foreground">{item?.price}</p>
                  <h3 className="text-sm font-semibold text-center w-2/3 py-2 ">
                    {item?.name}
                  </h3>
                  <Button
                    size="sm"
                    onClick={() => push("/")}
                    className="rounded-sm"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </AnimateSlideIn>
      </div>
      <div className="py-10">
        <h2 className="text-4xl text-center my-4 tracking-tighter font-[600]">
          Best Sellers
        </h2>
        <p className="text-center w-1/3 mx-auto text-muted-foreground">
          Marquee effects are a popular and eye-catching way to showcase
          products or promotions on websites. They involve scrolling text or
          images across the screen, creating a dynamic and engaging visual
          experience for visitors. Here are some common types of marquee
          effects:
        </p>
        <div className="mt-16">
          <Marquee classnName="container mx-auto">
            {bestSellingProds.map((item) => (
              <div
                key={item?.image}
                className="w-1/4 h-auto  flex items-center "
              >
                <Image
                  height={100}
                  width={100}
                  src={item?.image}
                  alt=""
                  unoptimized
                  className="h-full w-auto object-cover   rounded-3xl"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="bg-muted flex flex-col items-center py-24">
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
            <div className="flex  w-full flex-wrap justify-center gap-4 mt-16">
              {Categories.map((item) => (
                <div
                  key={item?.name}
                  className="flex h-full w-1/3 relative items-center overflow-hidden hover:bg-background transition-all ease-in-out duration-700   hover:shadow-lg flex-col border rounded-3xl justify-center  p-8"
                >
                  <item.icon className="h-auto w-1/2 text-muted-foreground absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 -rotate-[45deg]" />
                  <div className="w-full h-full relative">
                    <p className="text-xl font-bold">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateSlideIn>
        </div>
      </div>
    </>
  );
};

export default Page;
