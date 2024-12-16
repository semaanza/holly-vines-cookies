export const ShopCookieCardSchema = {
  name: "shopCookieCard",
  label: "Shop Cookie Card",
  type: "object",
  fields: [
    {
      type: "string",
      name: "cookieTitle",
      label: "Cookie Title",
      required: true,
    },
    {
      type: "image",
      name: "cookieImage",
      label: "Cookie Image",
    },
    {
      type: "string",
      label: "Ingrediants",
      name: "ingrediants",
    },
  ],
};
