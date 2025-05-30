import {
  ShopCookieCardSectionSchema,
  CookieCardSectionSchema,
  ContactFormSchema,
  GlobalSchema,
  LatestCookiesSchema,
  HowWeWorkSchema,
  LetsTalkSchema,
  ReviewSchema,
  HeroBannerSchema,
  PromiseSchema,
} from "../src";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN ?? "",
  // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            //list:true,
            //For adding multple items of the same EX: multiple cookie components
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "page",
        label: "Page",
        path: "content/page",
        format: "json",
        fields: [
          { type: "string", name: "header", label: "Heading" },
          {
            type: "object",
            name: "block",
            label: "Block",
            list: true,
            templates: [
              ShopCookieCardSectionSchema,
              HeroBannerSchema,
              CookieCardSectionSchema,
              ContactFormSchema,
              LatestCookiesSchema,
              HowWeWorkSchema,
              LetsTalkSchema,
              ReviewSchema,
              PromiseSchema,
            ],
          },
        ],
      },
      GlobalSchema,
    ],
  },
});
