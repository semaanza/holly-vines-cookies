export const PromiseSchema = {
  name: "promise",
  label: "Promise",
  type: "object",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      label: "Main Image",
      type: "image",
    },
    {
      name: "secondaryImage",
      label: "Secondary Image",
      type: "image",
    },
    {
      name: "cta",
      label: "Call to Action",
      type: "string",
    },
  ],
};
