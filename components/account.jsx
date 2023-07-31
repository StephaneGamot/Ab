import React from "react";
import styles from "../styles/page.module.css";

export default function Account({ accountBank, accountBalance }) {
	return (
		<>
			<section className={styles.account}>
				<div className={styles.accountContentWrapper}>
					<h3 className={styles.accountTitle}>{accountBank}</h3>
					<p className={styles.accountAmount}>{accountBalance}</p>
					<p className={styles.accountAmountDescription}>Available Balance</p>
				</div>
				<div className={`${styles.accountContentWrapper} ${styles.cta}`}>
					<button className={styles.transactionButton}>View transactions</button>
				</div>
			</section>
		</>
	);
}
