import { tinaField } from "tinacms/dist/react";
import {
  ShopCookieCardSection,
  CookieCardSection,
  HeroBanner,
  ContactForm,
} from "./Blocks";

export const Blocks = (props) => {
  return (
    <>
      {props.block
        ? props.block.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block) => {
  switch (block.__typename) {
    case "PageBlockHeroBanner":
      return <HeroBanner data={block} />;
    case "PageBlockCookieCardSection":
      return <CookieCardSection data={block} />;
    case "PageBlockContactForm":
      return <ContactForm data={block} />;
    case "ShopCookieCardSection":
      return <ShopCookieCardSection data={block} />;
    default:
      return <span>couldn't get</span>;
  }
};
