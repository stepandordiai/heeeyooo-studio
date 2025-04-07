import { AppProps } from "next/app";
import "../styles/globals.scss"; // Global styles if needed

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
