import Image from "next/image";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Chat from "../public/img/icon-chat.png";
import Money from "../public/img/icon-money.png";
import Security from "../public/img/icon-security.png";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Argent Bank - Home Page</title>
			</Head>
			<main>
				<div className={styles.hero}>
					<section className={styles.heroContent}>
						<h2 className={styles.srOnly}>Promoted Content</h2>
						<p className={styles.subtitle}>No fees.</p>
						<p className={styles.subtitle}>No minimum deposit.</p>
						<p className={styles.subtitle}>High interest rates.</p>
						<p className={styles.text}>Open a savings account with Argent Bank today!</p>
					</section>
				</div>
				<section className={styles.features}>
					<h2 className={styles.srOnly}>Features</h2>
					<div className={styles.featureItem}>
						<Image src={Chat} alt="Chat Icon" className={styles.featureIcon} width={150} height={100} />
						<h3 className={styles.featureItemTitle}>You are our #1 priority</h3>
						<p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
					</div>
					<div className={styles.featureItem}>
						<Image src={Money} alt="Money Icon" className={styles.featureIcon} width={150} height={100} />
						<h3 className={styles.featureItemTitle}>More savings means higher rates</h3>

						<p>The more you save with us, the higher your interest rate will be!</p>
					</div>
					<div className={styles.featureItem}>
						<Image src={Security} alt="Security Icon" className={styles.featureIcon} width={150} height={100} />
						<h3 className={styles.featureItemTitle}>Security you can trust</h3>
						<p>We use top of the line encryption to make sure your data and money is always safe.</p>
					</div>
				</section>
			</main>
		</div>
	);
}

































/*const getUsersApi = "http://localhost:3001/login";

	fetch(getUsersApi)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((error) => console.error("Une erreur est survenue: " + error.message)); */