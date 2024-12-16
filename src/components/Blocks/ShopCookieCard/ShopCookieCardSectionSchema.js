import { ShopCookieCardSchema } from "./ShopCookieCardSchema";

export const ShopCookieCardSectionSchema = {
  name: "shopCookieCardSection",
  label: "Shop Cookie Card Section",
  type: "object",
  list: true,
  fields: [ShopCookieCardSchema],
};
