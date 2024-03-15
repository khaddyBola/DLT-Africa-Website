import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "@material-tailwind/react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>DLT Africa Official Website</title>
				<meta name="description" content="DLT Africa Official Website" />
				{/* <link rel="icon" href="/logo.svg" /> */}
			</Head>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
