import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProduct {
  name: string;
  price: number;
  image: string;
  description?: string;
  model?: string;
  onSale?: boolean;
  onSalePrice?: number;
}

const AppliancePage = () => {
  const items = [
    {
      name: "Refrigerators",
      filters: [
        {
          name: "door-style",
          options: [
            { name: "french door", image: "" },
            { name: "side-by-side door", image: "" },
            { name: "4-door door", image: "" },
            { name: "top freezer", image: "" },
            { name: "bottom freezer", image: "" },
          ],
        },
      ],
      products: [],
    },
    { name: "dishwashers", filters: [], products: [] },
    { name: "ranges", filters: [], products: [] },
    { name: "microwaves", filters: [], products: [] },
    { name: "ovens", filters: [], products: [] },
    { name: "blenders", filters: [], products: [] },
    { name: "cooktops", filters: [], products: [] },
    { name: "ventilators", filters: [], products: [] },
    { name: "freezers", filters: [], products: [] },
    { name: "grills", filters: [], products: [] },
  ];

  const products = [
    {
      name: "LG - 27.12 Cu. Ft. Door-in-Door Side-by-Side Refrigerator with SpacePlus Ice System - Stainless Steel",
      price: 1299,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6573/6573586_sd.jpg",
      description: "",
      model: "LY27S3240S",
      onSalePrice: 999,
      Specifications: [
        {
          name: "key specs",
          value: [
            { title: "Voice Assistant Built-in", value: "no" },
            { title: "Product Height", value: "70 1/2 inches" },
            { title: "Product Width", value: "35 7/8 inches" },
            {
              title: "Height To Top Of Refrigerator (Without Hinges)",
              value: "68 7/8 inches",
            },
            { title: "Height To Top Of Door Hinge", value: "70 1/2 inches" },
            { title: "Depth With Handle", value: "33 7/16 inches" },
            { title: "Total Capacity", value: "27.12 cubic feet" },
            { title: "Total Capacity", value: "27.12 cubic feet" },
          ],
        },
        {
          name: "General",
          value: [
            {
              title: "VProduct Name",
              value:
                "27.12 Cu. Ft. Door-in-Door Side-by-Side Refrigerator with SpacePlus Ice System",
            },
            { title: "Brand", value: "LG" },
            { title: "Model Number", value: "LY27S3240S" },
            {
              title: "Color",
              value: "Stainless Steel",
            },
            { title: "Color Finish", value: "Stainless steel" },
            { title: "Side Panel Color", value: "Gray" },
          ],
        },
      ],
    },
  ];

  const productsData = (
    <div className="grid grid-cols-4">
      {[1, 2, 3, 4].map((items) => (
        <div
          key={items}
          className="flex flex-col gap-2 border p-3 mr-2  relative"
        >
          <div className="w-full flex items-center justify-center">
            <Image
              src={products?.[0]?.image}
              alt={products?.[0]?.name}
              width={200}
              height={200}
              unoptimized
              className=" w-1/2  place-items-center "
            />
          </div>
          <p className="text-xs font-[500] color">{products?.[0]?.name}</p>
          <div className="flex flex-col ">
            <Badge className="rounded-full w-fit" variant="destructive">
              on sale
            </Badge>
            <h2>
              Price :{" "}
              <span className="font-semibold">
                ${products?.[0]?.onSalePrice ?? products?.[0]?.price}{" "}
              </span>
              {!!products?.[0]?.onSalePrice && (
                <span className="line-through">${products?.[0]?.price}</span>
              )}
            </h2>
          </div>
          <Button className="rounded-sm">Buy now</Button>
        </div>
      ))}
    </div>
  );

  //   const topDeals = new Array<string>();
  return (
    <div className="container px-8 py-10 mx-auto h-[85vh]">
      {/* Render appliance details here */}
      <div className="grid grid-cols-[1fr,4fr] h-full">
        <div className="border h-[70vh]">
          <h2 className="font-bold text-lg p-3">Shop Appliances</h2>

          <div className="flex flex-col gap-3 ">
            {items?.map((items) => (
              <Link
                href={items?.name}
                key={items?.name}
                className="px-4 text-sm text-muted-foreground hover:text-foreground"
              >
                {items.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          {/* Render product list here */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold px-4 tracking-tight">
                Top Deals
              </h2>
            </div>
            <>{productsData}</>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold px-4 tracking-tight">
              Popular Appliances
            </h2>
            <>{productsData}</>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold px-4 tracking-tight">
              Shop by brand
            </h2>
            <>{productsData}</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliancePage;
