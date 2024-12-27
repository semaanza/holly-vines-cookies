export const ContactFormSchema = {
  name: "contactFormSection",
  label: "Contact Form",
  type: "object",
  fields: [
    {
      label: "Contact Form",
      name: "contactForm",
      type: "object",
      list: true,
      ui: { itemProps: ({ formTitle: label }) => ({ label }) },
      fields: [
        {
          type: "string",
          name: "formTitle",
          label: "Form Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
  ],
};
