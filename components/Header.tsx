import Link from "next/link";
import Image from "next/image";
// import logo from "./../public/logo/heeeyooo-studio-logo-white-v1.svg";
import logo from "./../public/logo/heeeyooo-studio-logo-white-v1.svg";
import styles from "./../styles/Header.module.scss";
import { useRef } from "react";

const Header = () => {
    const menu = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        if (menu.current && nav.current) {
            menu.current.classList.toggle(styles.menu__active);
            nav.current.classList.toggle(styles.nav__active);
        }
    };

    function hideMenu() {
        document.querySelector(".menu")!.classList.remove("menu--active");
        document.querySelector(".nav")!.classList.remove("nav--active");
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
                    <Link onClick={hideMenu} className={"js-link"} href={"/"}>
                        Home
                    </Link>
                    <p>About</p>
                    {/* <Link
                        onClick={hideMenu}
                        className={"js-link"}
                        href="/projects"
                    >
                        Projects
                    </Link> */}
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;
