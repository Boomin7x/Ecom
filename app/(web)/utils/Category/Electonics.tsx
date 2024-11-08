export type ICategory<T> = {
  name: string;
  image?: string;
  items: T[];
};

interface ICatItem {
  name: string;
  filters: string[];
  products: string[];
}

const appliance: ICategory<ICatItem>[] = [
  {
    name: "Major Kitchen appliances",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6493/6493491_sd.jpg",
    items: [
      { name: "Refrigerators", filters: [], products: [] },
      { name: "dishwashers", filters: [], products: [] },
      { name: "ranges", filters: [], products: [] },
      { name: "microwaves", filters: [], products: [] },
      { name: "ovens", filters: [], products: [] },
      { name: "blenders", filters: [], products: [] },
      { name: "cooktops", filters: [], products: [] },
      { name: "ventilators", filters: [], products: [] },
      { name: "freezers", filters: [], products: [] },
      { name: "grills", filters: [], products: [] },
      { name: "all appliances", filters: [], products: [] },
    ],
  },
  {
    name: "Washer and dryers",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419620_sd.jpg",
    items: [
      { name: "electric dryers", filters: [], products: [] },
      { name: "gas dryers", filters: [], products: [] },
      { name: "top-loading washers", filters: [], products: [] },
      { name: "front-loading washers", filters: [], products: [] },
      { name: "washer dryer combo", filters: [], products: [] },
    ],
  },
  {
    name: "Vacuums and floor care",
    image: "/img/floorRobot.png",
    // image: floorRobs.src,
    items: [
      { name: "upright vacuums", filters: [], products: [] },
      { name: "robot vacuums", filters: [], products: [] },
      { name: "steam mop", filters: [], products: [] },
      { name: "handheld and stick vacuums", filters: [], products: [] },
      { name: "all vacuums and floor care", filters: [], products: [] },
    ],
  },
  {
    name: "Heating, cooling and air conditioning",
    image: "/img/roundFan.png",
    items: [
      { name: "air conditioners", filters: [], products: [] },
      { name: "air purifiers", filters: [], products: [] },
      { name: "humidifiers", filters: [], products: [] },
      { name: "space heaters", filters: [], products: [] },
      {
        name: "all heating, cooling and air conditioning",
        filters: [],
        products: [],
      },
    ],
  },
];

const tv_and_home_theater: ICategory<string>[] = [
  {
    name: "TVs and home theater",
    image: "/img/projector.png",
    items: [
      "Smart TVs",
      "LED TVs",
      "OLED TVs",
      "4K TVs",
      "Smart home theater systems",
      "Home theater projectors",
      "Home theater speakers",
      "Home theater soundbars",
      "TV and home theater accessories",
    ],
  },
  {
    name: "home theater Accessories",
    image: "/img/cables.png",
    items: [
      "TV mounts",
      "TV stands",
      "soundbar mounts",
      "HDMI cables",
      "Home theater furniture",
      "remote controls",
      "tv antennas",
      "TV frames",
      "projector mounts",
    ],
  },
];

const computersAndtablets: ICategory<string>[] = [
  {
    name: "laptops and desktops",
    image: "/img/laptopCategory.png",
    items: [
      "laptops",
      "desktops",
      "gaming laptops",
      "gaming desktops",
      "workstation computers",
      "macbook",
      "chromebook",
      "2 in 1 laptops",
      "all laptops and desktops",
    ],
  },
  {
    name: "Tablets",
    image: "/img/tablets.png",
    items: [
      "ipad",
      "android tablets",
      "kindle fire tablets",
      "tablet accessories",
      "all tablets",
    ],
  },
  {
    name: "monitors",
    image: "/img/monitor.png",
    items: [
      "4k monitors",
      "curved monitors",
      "gaming monitors",
      "ultra-wide monitors",
      "oled monitors",
      "portable monitors",
      "top-rated monitors",
    ],
  },
  {
    name: "pc gaming & virtual reality",
    image: "/img/gamingPC.png",
    items: [
      "gaming desktops",
      "gaming laptops",
      "gaming monitors",
      "gaming headsets",
      "gaming keyboards",
      "gaming mice",
      "VR headsets",
      "VR accessories",
      "all pc gaming and virtual reality",
    ],
  },
  {
    name: "computer components",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/e400d6cd-0de9-4b60-b38c-421086c9a19c.jpg",
    items: [
      "Video graphics cards",
      "CPUs and processors",
      "Memory and RAM",
      "Motherboards",
      "fans, heatsinks and coolers",
      "COMPUTER CASES",
      "power supplies",
      "hard drives , SSD and storage",
      "all computer components",
    ],
  },
  {
    name: "Hard drives, SSD and storage",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d43ba406-73e5-49d0-a358-918b2b34e0aa.jpg",
    items: [
      "External Hard drives",
      "internal hard drives",
      "external SSDs",
      "internal SSDs",
      "USB flash drives",
      "Console games drives",
      "all hard drives, SSD and storage",
    ],
  },
  {
    name: "Computer accessories",
    items: [
      "mice and keyboards",
      "Computer cables and adapters",
      "computer speakers",
      "computer headset & microphones",
      "webcams",
      "Laptop bags and cases",
      "Laptop chargers and adapters",
      "Docking stations",
      "surge Protectors",
      "Drawing tablets",
      "Computer desks",
      "All computer accessories",
    ],
  },
];

// Transformed data

const cellphones: ICategory<string>[] = [
  {
    name: "Iphone",
    image: "/img/iphone.png",
    items: [
      "iphone 16 pro family",
      "iphone 16 family",
      "iphone 15 pro family",
      "iphone 15 family",
      "iphone 14 pro family",
      "iphone 14 family",
      "iphone 13 pro family",
      "iphone 13 family",
      "iphone 12 pro family",
      "iphone 12 family",
      "iphone 11 family",
      "iphone se",
      "iphone Accessories",
      "All Iphone",
    ],
  },
  {
    name: "Samsung galaxy",
    image: "/img/samsung.png",
    items: [
      "Samsung galaxy s24 ",
      "samsung galaxy s series",
      "samsung galaxy a series",
      "samsung galaxy z series",
      "samsung galaxy fold",
      "samsung galaxy accesories",
      "all samsung galaxy",
    ],
  },
  {
    name: "Google",
    image: "/img/google.png",
    items: [
      "Google pixel 9 series",
      "Google pixel 8 series",
      "Pixel accessories",
      "All Google Pixel",
    ],
  },
];

const transformItems = (categories: ICategory<string>[]) => {
  return categories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      name: item,
      filters: [],
      products: [],
    })),
  }));
};

const transformedTvAndHomeTheater: ICategory<ICatItem>[] =
  transformItems(tv_and_home_theater);
const transformedComputersAndTablets: ICategory<ICatItem>[] =
  transformItems(computersAndtablets);
const transformedCellphones: ICategory<ICatItem>[] = transformItems(cellphones);

const electronics = {
  name: "Electronics",
  items: [
    { name: "appliance", items: appliance },
    { name: "tv_and_home_theater", items: transformedTvAndHomeTheater },
    { name: "computers_and_tablets", items: transformedComputersAndTablets },
    { name: "cellphones", items: transformedCellphones },
  ],
};

export default electronics;
