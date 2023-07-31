import { store } from "../store/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Nav />
				<Component {...pageProps} />
				<Footer />
			</Provider>
		</>
	);
}
