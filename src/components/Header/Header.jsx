import "./Header.scss";
import logo from "./../../assets/logo/heeeyooo-studio-logo-white-v1.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        document.querySelector(".menu-txt").addEventListener("click", () => {
            document.querySelector(".menu").classList.toggle("menu--active");
            document.querySelector(".nav").classList.toggle("nav--active");
            // document.querySelectorAll(".text-line").forEach((el, index) => {
            // setTimeout(() => {
            // el.style.animation = "revealTextLine 1s forwards";
            // el.classList.toggle("text-line--active");
            // }, 300 * index);
            // });
        });

        document.querySelector(".js-link").addEventListener("click", () => {
            document.querySelector(".menu").classList.remove("menu--active");
            document.querySelector(".nav").classList.remove("nav--active");
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                    <span>heeeyooo.studio</span>
                </div>
                <div className="menu">
                    <div className="menu-txt">menu</div>
                    <nav className="nav">
                        <div className="text-line-wrapper">
                            <div className="text-line">
                                <p>Home</p>
                            </div>
                        </div>
                        <div className="text-line-wrapper">
                            <div className="text-line">
                                <p>About</p>
                            </div>
                        </div>
                        <div className="text-line-wrapper">
                            <div className="text-line">
                                <NavLink className={"js-link"} to="/projects">
                                    Projects
                                </NavLink>
                            </div>
                        </div>
                        <div className="text-line-wrapper">
                            <div className="text-line">
                                <p>Contact</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
