export const HowWeWorkSchema = {
  name: "howWeWork",
  label: "How We Work Section",
  type: "object",
  fields: [
    {
      name: "howWeWorkCards",
      label: "How We Work Cards",
      type: "object",
      list: true,
      ui: { itemProps: ({ title: label }) => ({ label }) },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Card Title",
          required: true,
        },
        {
          type: "string",
          name: "step",
          label: "Step",
          required: true,
        },
        {
          type: "string",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
      ],
    },
  ],
};
