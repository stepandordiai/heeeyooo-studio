import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo/heeeyooo-studio-logo-white-v1.svg";
import "./Header.scss";

const Header = () => {
    useEffect(() => {
        document.querySelector(".menu-txt").addEventListener("click", () => {
            document.querySelector(".menu").classList.toggle("menu--active");
            document.querySelector(".nav").classList.toggle("nav--active");
        });

        document.querySelector(".js-link").addEventListener("click", () => {
            document.querySelector(".menu").classList.remove("menu--active");
            document.querySelector(".nav").classList.remove("nav--active");
        });
    }, []);

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <span>heeeyooo.studio</span>
            </div>
            <div className="menu">
                <div className="menu-txt">menu</div>
                <nav className="nav">
                    <p>Home</p>
                    <p>About</p>
                    <NavLink className={"js-link"} to="/projects">
                        Projects
                    </NavLink>
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;
