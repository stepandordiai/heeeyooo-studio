import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/Header.module.scss";

const Header = () => {
	const menuBtn = useRef<HTMLButtonElement | null>(null);
	const menu = useRef<HTMLDivElement | null>(null);
	const el1 = useRef<HTMLDivElement | null>(null);
	const el2 = useRef<HTMLDivElement | null>(null);

	const handleMenuToggle = useCallback(() => {
		if (menu.current && el1.current && el2.current) {
			menu.current.classList.toggle(styles["menu--active"]);
			el1.current.classList.toggle(styles["el1--active"]);
			el2.current.classList.toggle(styles["el2--active"]);
		}
	}, []);

	useEffect(() => {
		menuBtn.current?.addEventListener("click", handleMenuToggle);

		return () => {
			menuBtn.current?.removeEventListener("click", handleMenuToggle);
		};
	}, [handleMenuToggle]);

	return (
		<>
			<header className={styles.header}>
				<Link href={"/"} className={styles["header__logo-link"]}>
					<Image
						src="/logo/heeeyooo-studio-logo-black-v1.svg"
						width={40}
						height={40}
						alt=""
					/>
					<p>
						heeeyooo <span>studio</span>
					</p>
				</Link>
				{/* <button ref={menuBtn} className={styles["menu-btn"]}>
					<span style={{ pointerEvents: "none" }}>menu</span>
				</button> */}
			</header>
			{/* <div ref={menu} className={styles["menu"]}>
				<nav className={styles["menu__nav"]}>
					<Link className={styles["nav-link"]} href={"/"}>
						Home
					</Link>
					<Link className={styles["nav-link"]} href={"/about"}>
						About
					</Link>
					<Link className={styles["nav-link"]} href={"/work"}>
						Work
					</Link>
					<Link className={styles["nav-link"]} href={"/contacts"}>
						Contacts
					</Link>
				</nav>
			</div>
			<div ref={el1} className={styles["el1"]}></div>
			<div ref={el2} className={styles["el2"]}></div> */}
		</>
	);
};

export default Header;
