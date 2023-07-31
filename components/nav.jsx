import React from "react";
import Image from "next/image";
import argentBankLogo from "../public/img/argentBankLogo.png";
import styles from "../styles/page.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import SignIn from "./signIn";
import SignOut from "./signOut";

export default function Nav() {
	const router = useRouter();
	const isUserPage = router.pathname === "/user";
	
	return (
		<div>
		<nav className={styles.mainNav}>
			<Link href="/" className={styles.mainNavLogo}>
				<Image className={styles.mainNavLogoImage} src={argentBankLogo} alt="Argent Bank Logo" width={200} height={54} placeholder="blur" />
			</Link>
			<h1 className={styles.srOnly}>Argent Bank</h1>

			<div className={styles.signIn}>{isUserPage ? <SignOut /> : <SignIn />}</div>
		</nav>
	</div>
);
}
