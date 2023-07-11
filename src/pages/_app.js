import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
