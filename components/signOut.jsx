import Link from "next/link";
import styles from "../styles/page.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function SignOut() {
	const firstName = useSelector((state) => state.user?.firstName);

	return (
		<>
			<div className={`${styles.mainNavItemOut} ${styles.navName}`}>
				<FontAwesomeIcon className={styles.signInIcon} icon={faUserCircle} width={16} height={16} />
				<div>{firstName}</div>
			</div>

			<Link href="/">
				<div className={styles.mainNavItemOut}>
					<FontAwesomeIcon className={styles.signInIcon} icon={faSignOutAlt} width={16} height={16} />
					Sign Out
				</div>
			</Link>
		</>
	);
}
