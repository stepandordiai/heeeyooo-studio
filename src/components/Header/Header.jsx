import "./Header.scss";
import logoIcon from "./../../assets/logo/Frame 98.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        <>
            <header className="header">
                <div>
                    <img width={100} src={logoIcon} alt="" />
                    <div>heeeyooo.studio</div>
                </div>
            </header>
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
        </>
    );
};

export default Header;
