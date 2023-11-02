import CookieCardSection from "./Blocks/CookieCardSection/CookieCardSection";
import HeroBanner from "./Blocks/HeroBanner/HeroBanner";
import ContactForm from "./Blocks/Contact/ContactForm";
import { tinaField } from "tinacms/dist/react";

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
    default:
      return <span>couldn't get</span>;
  }
};
