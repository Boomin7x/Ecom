const men = [
  {
    name: "ready to wear",
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
    items: ["sneakers", "boots", "sandals", "dress shoes"],
  },
  {
    name: "Bags",
    items: [
      "bag and totes",
      "backpacks",
      "belt bags",
      "crossbody and messangers",
    ],
  },
  {
    name: "Accessories",
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

const women = [
  {
    ...men[0],
    items: [...men[0].items, "dresses and skirts", "swimwear", "kids"],
  },
  {
    ...men[1],
    items: [...men[1].items, "bumbs and heels"],
  },
  {
    name: "bags",
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
    items: [...men[3].items, "Hair accessories"],
  },
];

const fashion = {
  name: "Fashion",
  items: [
    {
      name: "Men",
      items: men,
    },
    {
      name: "Women",
      items: women,
    },
  ],
};

export default fashion;
