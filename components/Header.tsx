import Link from "next/link";
import Image from "next/image";
import logo from "./../public/logo/heeeyooo-studio-logo-white-v1.svg";
import styles from "./../styles/Header.module.scss";
import { useRef } from "react";

const Header = () => {
	const menu = useRef<HTMLDivElement>(null);
	const nav = useRef<HTMLElement>(null);

	const toggleMenu = () => {
		const wordLineElements = document.querySelectorAll(
			`.${styles["word-line"]}`
		);

		if (menu.current && wordLineElements.length > 0) {
			menu.current.classList.toggle(styles.menu__active);
			wordLineElements.forEach((el, index) => {
				setTimeout(() => {
					el.classList.toggle(styles["word-line--active"]);
				}, index * 100);
			});
		}
	};

	function hideMenu() {
		const wordLineElements = document.querySelectorAll(
			`.${styles["word-line"]}`
		);
		if (menu.current && wordLineElements.length > 0) {
			menu.current.classList.remove(styles.menu__active);
			wordLineElements.forEach((el) => {
				el.classList.remove(styles["word-line--active"]);
			});
		}
	}

	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.header__logo}`}>
				<Image
					className={styles.logo__img}
					src={logo}
					layout="responsive"
					width={50}
					height={50}
					alt="Logo"
				/>
				<span className="js-scrambled-txt">heeeyooo.studio</span>
			</div>
			<div ref={menu} className={`${styles.menu}`}>
				<div
					onClick={toggleMenu}
					className={`${styles.menu__txt} js-scrambled-txt`}
				>
					Menu
				</div>
				<nav ref={nav} className={`${styles.nav}`}>
					<div className={styles["word-line__container"]}>
						<div className={styles["word-line"]}>
							<Link onClick={hideMenu} className={styles["js-link"]} href={"/"}>
								Home
							</Link>
						</div>
					</div>
					<div className={styles["word-line__container"]}>
						<div className={styles["word-line"]}>
							<Link onClick={hideMenu} className={styles["js-link"]} href={"/"}>
								About
							</Link>
						</div>
					</div>
					<div className={styles["word-line__container"]}>
						<div className={styles["word-line"]}>
							<Link onClick={hideMenu} className={styles["js-link"]} href={"/"}>
								Projects
							</Link>
						</div>
					</div>

					{/* <Link onClick={hideMenu} className={styles["js-link"]} href={"/"}>
						About
					</Link>
					<Link onClick={hideMenu} className={styles["js-link"]} href={"/"}>
						Projects
					</Link> */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
