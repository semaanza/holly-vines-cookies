export const CookieCardSectionSchema = {
  name: "cookieCardSection",
  label: "Cookie Card Section",
  type: "object",
  fields: [
    {
      label: "Cookie Cards",
      name: "cookieCards",
      type: "object",
      list: true,
      ui: { itemProps: ({ cardTitle: label }) => ({ label }) },
      fields: [
        {
          type: "string",
          name: "cardTitle",
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
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Ingrediants",
          name: "ingrediants",
        },
      ],
    },
  ],
};
