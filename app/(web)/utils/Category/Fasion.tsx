import { ICategory } from "./Electonics";

const men: ICategory[] = [
  {
    name: "ready to wear",
    image:
      "https://balenciaga.dam.kering.com/m/d0557b55f53361d/Large-809142TRO411262_G.jpg",
    items: [
      "coats and jackets",
      "pants",
      "t-shirts",
      "tops and shirts",
      "sweatshirts and hoodies",
      "underwear",
    ],
  },
  {
    name: "Shoes",
    image:
      "https://balenciaga.dam.kering.com/m/5b59212c708e8d14/Large-734734W3XL11210_F.jpg",
    items: ["sneakers", "boots", "sandals", "dress shoes"],
  },
  {
    name: "Bags",
    image:
      "https://balenciaga.dam.kering.com/m/179a9be28fd1f8fd/Large-6440332BKOI1000_F.jpg",
    items: [
      "bag and totes",
      "backpacks",
      "belt bags",
      "crossbody and messangers",
    ],
  },
  {
    name: "Accessories",
    image:
      "https://balenciaga.dam.kering.com/m/37b75069a95eb017/Large-783094T00071000_F.jpg",
    items: [
      "sun glasses",
      "jewelry",
      "belts",
      "scarves and caps",
      "Socks",
      "Phone accessories",
      "objects",
    ],
  },
];

const women: ICategory[] = [
  {
    ...men[0],
    image:
      "https://balenciaga.dam.kering.com/m/7ad07a2700b527d6/Large-809510T17121240_G.jpg",
    items: [...men[0].items, "dresses and skirts", "swimwear", "kids"],
  },
  {
    ...men[1],
    image:
      "https://balenciaga.dam.kering.com/m/6e74957b1a4fc28b/Large-719908W2ES01000_F.jpg",
    items: [...men[1].items, "bumbs and heels"],
  },
  {
    name: "bags",
    image:
      "https://balenciaga.dam.kering.com/m/507d7dbc8127c174/Large-8054812ABAV2621_F.jpg",
    items: [
      "handbags",
      "shoulder bags",
      "mini bags",
      "chain bags",
      "tote bags",
    ],
  },
  {
    ...men[3],
    image:
      "https://balenciaga.dam.kering.com/m/4dc7385026979486/Large-790043T00071000_F.jpg",
    items: [...men[3].items, "Hair accessories"],
  },
];

const fashion: ICategoryData = {
  name: "Fashion",
  items: [
    { name: "Men", items: men },
    { name: "Women", items: women },
  ],
};

export interface ICategoryData {
  name: string;
  items: {
    name: string;
    items: ICategory[];
  }[];
}
export default fashion;
