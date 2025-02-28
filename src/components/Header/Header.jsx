import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo/heeeyooo-studio-logo-white-v1.svg";
import "./Header.scss";

const Header = () => {
    function toggleMenu() {
        document.querySelector(".menu").classList.toggle("menu--active");
        document.querySelector(".nav").classList.toggle("nav--active");
    }

    function hideMenu() {
        document.querySelector(".menu").classList.remove("menu--active");
        document.querySelector(".nav").classList.remove("nav--active");
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
                <span>heeeyooo.studio</span>
            </div>
            <div className="menu">
                <div onClick={toggleMenu} className="menu-txt">
                    menu
                </div>
                <nav className="nav">
                    <NavLink onClick={hideMenu} className={"js-link"} to={"/"}>
                        Home
                    </NavLink>
                    <p>About</p>
                    <NavLink
                        onClick={hideMenu}
                        className={"js-link"}
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;
