import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles["header-top"]}>
				<Link href={"/"} className={styles["header__logo-link"]}>
					<Image
						src="/logo/heeeyooo-studio-logo-white-v1.svg"
						width={30}
						height={30}
						alt=""
					/>
					<span>heeeyooo.studio</span>
				</Link>
				<button className={styles["menu-btn"]}>
					<span>menu</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
