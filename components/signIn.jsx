import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/page.module.css";

export default function SignIn() {
	return (
		<Link href="../sign-in" className={styles.mainNavItemIn}>
			<FontAwesomeIcon className={styles.signInIcon} icon={faUserCircle} width={16} height={16} />
			Sign In
		</Link>
	);
}
