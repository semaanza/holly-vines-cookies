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
      name: "heroImage",
    },
    {
      type: "image",
      label: "Side log image",
      name: "sideLogoImage",
    },
  ],
};
