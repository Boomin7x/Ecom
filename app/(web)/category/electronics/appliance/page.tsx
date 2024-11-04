import Link from "next/link";
import React from "react";

const AppliancePage = () => {
  // {
  //     name: "Major Kitchen appliances",
  //     image:
  //       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6493/6493491_sd.jpg",
  //     items: [
  //       { name: "Refrigerators", filters: [], products: [] },
  //       { name: "dishwashers", filters: [], products: [] },
  //       { name: "ranges", filters: [], products: [] },
  //       { name: "microwaves", filters: [], products: [] },
  //       { name: "ovens", filters: [], products: [] },
  //       { name: "blenders", filters: [], products: [] },
  //       { name: "cooktops", filters: [], products: [] },
  //       { name: "ventilators", filters: [], products: [] },
  //       { name: "freezers", filters: [], products: [] },
  //       { name: "grills", filters: [], products: [] },
  //     ],
  //   },

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

  //   const topDeals = new Array<string>();
  return (
    <div className="container px-8 py-10 mx-auto h-[85vh]">
      {/* Render appliance details here */}
      <div className="grid grid-cols-[1fr,4fr] h-full">
        <div className="border">
          <h2 className="font-bold text-lg p-3">Shop Appliances</h2>

          <div className="flex flex-col gap-3">
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
        <div className="" />
      </div>
    </div>
  );
};

export default AppliancePage;
