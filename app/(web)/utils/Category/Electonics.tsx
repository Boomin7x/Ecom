interface ICategory {
  name: string;
  image?: string;
  items: string[];
}

const appliance: ICategory[] = [
  {
    name: "Major Kitchen appliances",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6493/6493491_sd.jpg",
    items: [
      "Refrigerators",
      "dishwashers",
      "ranges",
      "microwaves",
      "ovens",
      "blenders",
      "cooktops",
      "ventilators",
      "freezers",
      "grills",
    ],
  },
  {
    name: "Washer and dryers",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419620_sd.jpg",
    items: [
      "electric dryers",
      "gas dryers",
      "top-loading washers",
      "front-loading washers",
      "washer dryer combo",
    ],
  },
  {
    name: "Vacuums and floor care",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576344_sd.jpg",
    items: [
      "upright vacuums",
      "robot vacuums",
      "steam mop",
      "handheld and stick vacuums",
      "all vacuums and floor care",
    ],
  },
  {
    name: "Heating, cooling and air conditioning",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501151cv12d.jpg",
    items: [
      "air conditioners",
      "air purifiers",
      "humidifiers",
      "space heaters",
      "all heating, cooling and air conditioning",
    ],
  },
];

const tv_and_home_theater: ICategory[] = [
  {
    name: "TVs and home theater",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502590_sd.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472355ld.jpg",
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

const computersAndtablets: ICategory[] = [
  {
    name: "laptops and desktops",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6582/6582846_sd.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566195_sd.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6527/6527046_sd.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/ae73c05a-1674-4ccf-8724-7c800f47ddba.jpg",
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

const cellphones: ICategory[] = [
  {
    name: "Iphone",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/c379ba4c-68af-4410-95ba-c739979192f7.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570299_sd.jpg",
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
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/70c08720-7699-43cf-a8c3-a51a492149d7.jpg",
    items: [
      "Google pixel 9 series",
      "Google pixel 8 series",
      "Pixel accessories",
      "All Google Pixel",
    ],
  },
];

const electronics = {
  name: "Electronics",
  items: [
    { name: "appliance", items: appliance },
    { name: "tv_and_home_theater", items: tv_and_home_theater },
    { name: "computers_and_tablets", items: computersAndtablets },
    { name: "cellphones", items: cellphones },
  ],
};

export default electronics;
