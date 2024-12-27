import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "@/components/Layout/Layout";
import { Children } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B2AC88",
    },
    secondary: {
      main: "#F5F5DC",
    },
  },
  //typography: {},
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
