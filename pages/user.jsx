import styles from "../styles/page.module.css";
import Head from "next/head";
import Account from "../components/account";
import Welcome from "../components/welcome";

export default function User() {
	return (
		<div>
			<Head>
				<title>Argent Bank - User Page</title>
			</Head>
			<main className={`${styles.main} ${styles.userPage}`}>
				<Welcome />

				<h2 className={styles.srOnly}>Accounts</h2>

				<Account accountBank="Argent Bank Checking (x8349)" accountBalance="$2,082.79" />
				<Account accountBank="Argent Bank Savings (x6712)" accountBalance="$10,928.42" />
				<Account accountBank="Argent Bank Credit Card (x8349)" accountBalance="$184.30" />
			</main>
		</div>
	);
}
