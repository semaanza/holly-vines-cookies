export const ShopCookieCardSchema = {
  name: "shopCookieCard",
  label: "Shop Cookie Card",
  type: "object",
  fields: [
    {
      name: "shopCookieCard",
      label: "Shop Cookie Card",
      type: "object",
      list: true,
      ui: { itemProps: ({ cookieTitle: label }) => ({ label }) },
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
          label: "Ingredients",
          name: "ingredients",
        },
      ],
    },
  ],
};
