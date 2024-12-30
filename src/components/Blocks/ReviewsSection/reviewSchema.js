export const ReviewSchema = {
  name: "reviews",
  label: "Reviews",
  type: "object",
  fields: [
    {
      name: "reviewCards",
      label: "Review Cards",
      type: "object",
      list: true,
      ui: { itemProps: ({ name: label }) => ({ label }) },
      fields: [
        {
          name: "name",
          label: "Name",
          type: "string",
          required: true,
        },
        {
          name: "review",
          label: "Review",
          type: "string",
          required: true,
        },
        {
          name: "rating",
          label: "Rating",
          type: "number",
        },
      ],
    },
  ],
};
