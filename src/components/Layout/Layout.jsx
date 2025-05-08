import { Header } from "./Header";
import { Footer } from "./Footer";
import layoutData from "../../../content/global/layout.json";
import { CartLink } from "../CartLink";

export const Layout = ({ children }) => {
  return (
    <>
      <Header data={layoutData?.header} />
      <CartLink />
      <main style={{ height: "100vh", paddingTop: { xs: "60px", sm: "64px" } }}>
        {children}
        <Footer logo={layoutData.header.logo.logoImage} />
      </main>
    </>
  );
};
