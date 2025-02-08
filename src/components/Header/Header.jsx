import "./Header.scss";
import logoIcon from "./../../assets/logo/Frame 98.svg";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        document.querySelector(".menu-txt").addEventListener("click", () => {
            document.querySelector(".menu").classList.toggle("menu--active");
            document.querySelector(".nav").classList.toggle("nav--active");
        });
    }, []);
    return (
        <header className="header">
            <div>
                <img width={100} src={logoIcon} alt="" />
                <div>.studio</div>
            </div>
            <div className="menu">
                <div className="menu-txt">menu</div>
                <nav className="nav">
                    <p>Home</p>
                    <p>About</p>
                    <p>Portfolio</p>
                    <p>Contact</p>
                </nav>
            </div>
        </header>
    );
};

export default Header;
