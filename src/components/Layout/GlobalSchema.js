export const GlobalSchema = {
  name: "global",
  label: "Global",
  path: "content/global",
  format: "json",
  fields: [
    {
      name: "header",
      label: "Header",
      type: "object",
      fields: [
        {
          name: "logo",
          label: "Logo",
          type: "object",
          fields: [
            {
              name: "logoImage",
              label: "Logo Image",
              type: "image",
            },
            {
              name: "logoHref",
              label: "Logo Href",
              type: "string",
            },
          ],
        },
        {
          name: "navItems",
          label: "Nav Items",
          type: "object",
          list: true,
          ui: { itemProps: ({ linkName: label }) => ({ label }) },
          fields: [
            {
              name: "href",
              label: "Link",
              type: "string",
            },
            {
              name: "linkName",
              label: "Link Name",
              type: "string",
            },
          ],
        },
      ],
    },
    // {
    // 	name: "footer",
    // 	label: "Footer",
    // 	type: "object",
    // 	fields: [],
    // },
  ],
};
