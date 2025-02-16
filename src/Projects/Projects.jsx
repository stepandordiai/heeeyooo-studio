import { useEffect } from "react";
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
        });
    });

    return (
        <>
            <section className="projects">
                <div className="wrapper1"></div>
                <div className="wrapper2"></div>
                <div className="wrapper3"></div>
                <div className="wrapper4"></div>
            </section>
            <div className="pagination">
                <div className="page1 page--active"></div>
                <div className="page2"></div>
                <div className="page3"></div>
                <div className="page4"></div>
            </div>
        </>
    );
};

export default Projects;
