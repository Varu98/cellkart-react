import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },
  {
    _id: uuid(),
    title: "realme 8i | 64 GB/4 GB RAM | Space Black",
    price: faker.commerce.price(20000, 50000, 0, "INR"),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "assets/mobileImages/realme_8i_Space_Black-1.jpeg",
  },
  {
    _id: uuid(),
    title: "vivo Y73 | 128 GB/8 GB RAM | Diamond Flare",
    price: faker.commerce.price(20000, 50000, 0, "INR"),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "assets/mobileImages/vivo_Y73_Diamond_Flare-1.jpeg",
  },
  {
    _id: uuid(),
    title: "Samsung Galaxy A22 5G | 8GB RAM/128GB Storage | Grey",
    price: faker.commerce.price(20000, 50000, 0, "INR"),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "assets/mobileImages/SAMSUNG_Galaxy_A22_5G-1_us02-m7.jpeg",
  },
  {
    _id: uuid(),
    title: "OPPO Reno7 Pro 5G | 12GB RAM/256 GB | Starlight Black",
    price: faker.commerce.price(20000, 50000, 0, "INR"),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "assets/mobileImages/OPPO_Reno7_Pro_5G_Starlight_Black-1.jpeg",
  },
];
