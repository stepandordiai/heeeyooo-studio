import { useEffect } from "react";
import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg";
import img3 from "./../assets/3.jpg";
import img4 from "./../assets/4.jpg";

import "./Projects.scss";

const Projects = () => {
    const display = window.innerHeight;

    const halfDisplay = display / 2;

    useEffect(() => {
        const projectsScroll = document.querySelector(".projects");
        projectsScroll.addEventListener("scroll", () => {
            if (projectsScroll.scrollTop < halfDisplay) {
                document.querySelector(".page1").classList.add("page--active");
                document
                    .querySelector(".page2")
                    .classList.remove("page--active");
                document
                    .querySelector(".page3")
                    .classList.remove("page--active");
                document
                    .querySelector(".page4")
                    .classList.remove("page--active");
            } else if (
                projectsScroll.scrollTop > halfDisplay &&
                projectsScroll.scrollTop < display + halfDisplay
            ) {
                document
                    .querySelector(".page1")
                    .classList.remove("page--active");
                document.querySelector(".page2").classList.add("page--active");
                document
                    .querySelector(".page3")
                    .classList.remove("page--active");
                document
                    .querySelector(".page4")
                    .classList.remove("page--active");
            } else if (
                projectsScroll.scrollTop > display + halfDisplay &&
                projectsScroll.scrollTop < display * 2 + halfDisplay
            ) {
                document
                    .querySelector(".page1")
                    .classList.remove("page--active");
                document
                    .querySelector(".page2")
                    .classList.remove("page--active");
                document.querySelector(".page3").classList.add("page--active");
                document
                    .querySelector(".page4")
                    .classList.remove("page--active");
            } else if (
                projectsScroll.scrollTop > display * 2 + halfDisplay &&
                projectsScroll.scrollTop < display * 3 + halfDisplay
            ) {
                document
                    .querySelector(".page1")
                    .classList.remove("page--active");
                document
                    .querySelector(".page2")
                    .classList.remove("page--active");
                document
                    .querySelector(".page3")
                    .classList.remove("page--active");
                document.querySelector(".page4").classList.add("page--active");
            }

            document.querySelectorAll(".wrapper").forEach((el) => {
                el.classList.add("wrapper--active");
            });
        });

        projectsScroll.addEventListener("scrollend", () => {
            document.querySelectorAll(".wrapper").forEach((el) => {
                el.classList.remove("wrapper--active");
            });
        });
    }, []);

    function scrollTo1Page() {
        const projectsScroll = document.querySelector(".projects");

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 600);
    }

    function scrollTo2Page() {
        const projectsScroll = document.querySelector(".projects");

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }, 600);
    }

    function scrollTo3Page() {
        const projectsScroll = document.querySelector(".projects");

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll.scrollTo({
                top: window.innerHeight * 2,
                behavior: "smooth",
            });
        }, 600);
    }

    function scrollTo4Page() {
        const projectsScroll = document.querySelector(".projects");

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll.scrollTo({
                top: window.innerHeight * 3,
                behavior: "smooth",
            });
        }, 600);
    }

    return (
        <>
            <section className="projects">
                <div className="wrapper wrapper1">
                    <img src={img1} alt="" />
                    <p>Pepa Bourek</p>
                    <a href="https://pepabourek.cz/" target="_blank">
                        pepabourek.cz
                    </a>
                </div>
                <div className="wrapper wrapper2">
                    <p>Prozubik</p>
                    <img src={img2} alt="" />
                    <a href="https://prozubik.cz/" target="_blank">
                        prozubik.cz
                    </a>
                </div>
                <div className="wrapper wrapper3">
                    <p>Neresen</p>
                    <img src={img3} alt="" />
                    <a href="https://neresen-cz.netlify.app/" target="_blank">
                        neresen.cz
                    </a>
                </div>
                <div className="wrapper wrapper4">
                    <img src={img4} alt="" />
                </div>
            </section>
            <div className="pagination">
                <div onClick={scrollTo1Page} className="page1 page--active">
                    <span>01</span>
                </div>
                <div onClick={scrollTo2Page} className="page2">
                    <span>02</span>
                </div>
                <div onClick={scrollTo3Page} className="page3">
                    <span>03</span>
                </div>
                <div onClick={scrollTo4Page} className="page4">
                    <span>04</span>
                </div>
            </div>
        </>
    );
};

export default Projects;
