import { Header } from "./Header";
import { Footer } from "./Footer";
import layoutData from "../../../content/global/layout.json";

export const Layout = ({ children }) => {
  return (
    <>
      <Header data={layoutData?.header} />
      <main style={{ height: "100vh", paddingTop: { xs: "60px", sm: "64px" } }}>
        {children}
        <Footer />
      </main>
    </>
  );
};
