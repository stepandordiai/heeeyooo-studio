import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss"; // Global styles if needed

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link
					rel="icon"
					type="image/x-icon"
					href="/favicons/heeeyooo-studio-v2.svg"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/heeeyooo-studio-v2.png"
				/>
				<title>heeeyooo.studio</title>
			</Head>
			<Component {...pageProps} />;
		</>
	);
};

export default MyApp;
