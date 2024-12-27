export const LatestCookiesSchema = {
  name: "latestCookies",
  label: "Latest Cookies",
  type: "object",
  fields: [
    {
      type: "object",
      label: "Cookies",
      name: "cookies",
      list: true,
      ui: { itemProps: ({ title: label }) => ({ label }) },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Image Source",
          name: "imgSource",
        },
        {
          type: "boolean",
          label: "Reverse",
          name: "reverse",
        },
      ],
    },
  ],
};
