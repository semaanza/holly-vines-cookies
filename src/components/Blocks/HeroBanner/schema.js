export const HeroBannerSchema = {
  name: "heroBanner",
  label: "Hero Banner",
  type: "object",
  fields: [
    {
      type: "string",
      label: "Description",
      name: "description",
    },
    {
      type: "image",
      label: "Main Image",
      name: "mainImage",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
  ],
};
