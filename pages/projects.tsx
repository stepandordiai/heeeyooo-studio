import { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "./../public/1.jpg";
import img2 from "./../public/2.jpg";
import img3 from "./../public/3.jpg";
import img4 from "./../public/4.jpg";
import styles from "./../styles/Projects.module.scss";
// import "./Projects.scss";

const Projects = () => {
    // window doesnt exist in ssr render only in browser
    const display = typeof window !== "undefined" ? window.innerWidth : 0;

    const wrapper = useRef<(HTMLDivElement | null)[]>(null);

    const halfDisplay: number = display / 2;
    const page1 = useRef<HTMLDivElement>(null);
    const page2 = useRef<HTMLDivElement>(null);
    const page3 = useRef<HTMLDivElement>(null);
    const page4 = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (page1 && page2 && page3 && page4) {
            const projectsScroll = document.querySelector(
                styles.projects
            ) as HTMLElement | null;

            if (!projectsScroll) {
                return;
            }
            projectsScroll!.addEventListener("scroll", () => {
                if (projectsScroll.scrollTop < halfDisplay) {
                    page1.current!.classList.add("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll!.scrollTop > halfDisplay &&
                    projectsScroll!.scrollTop < display + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.add("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll!.scrollTop > display + halfDisplay &&
                    projectsScroll!.scrollTop < display * 2 + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.add("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll!.scrollTop > display * 2 + halfDisplay &&
                    projectsScroll!.scrollTop < display * 3 + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.add("page__active");
                }

                document.querySelectorAll(".wrapper").forEach((el) => {
                    el.classList.add("wrapper--active");
                });
            });

            projectsScroll!.addEventListener("touchmove", () => {
                if (projectsScroll.scrollTop < halfDisplay) {
                    page1.current!.classList.add("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll.scrollTop > halfDisplay &&
                    projectsScroll.scrollTop < display + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.add("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll.scrollTop > display + halfDisplay &&
                    projectsScroll.scrollTop < display * 2 + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.add("page__active");
                    page4.current!.classList.remove("page__active");
                } else if (
                    projectsScroll.scrollTop > display * 2 + halfDisplay &&
                    projectsScroll.scrollTop < display * 3 + halfDisplay
                ) {
                    page1.current!.classList.remove("page__active");
                    page2.current!.classList.remove("page__active");
                    page3.current!.classList.remove("page__active");
                    page4.current!.classList.add("page__active");
                }

                document.querySelectorAll(".wrapper").forEach((el) => {
                    el.classList.add("wrapper--active");
                });
            });

            projectsScroll!.addEventListener("scrollend", () => {
                document.querySelectorAll(".wrapper").forEach((el) => {
                    el.classList.remove("wrapper--active");
                });
            });

            projectsScroll!.addEventListener("touchend", () => {
                document.querySelectorAll(".wrapper").forEach((el) => {
                    el.classList.remove("wrapper--active");
                });
            });
        }
    }, []);

    function scrollTo1Page() {
        const projectsScroll = document.querySelector(
            ".projects"
        ) as HTMLElement | null;

        if (!projectsScroll) {
            return;
        }

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
        const projectsScroll = document.querySelector(
            ".projects"
        ) as HTMLElement | null;

        if (!projectsScroll) {
            return;
        }

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll!.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }, 600);
    }

    function scrollTo3Page() {
        const projectsScroll = document.querySelector(
            ".projects"
        ) as HTMLElement | null;

        if (!projectsScroll) {
            return;
        }

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll!.scrollTo({
                top: window.innerHeight * 2,
                behavior: "smooth",
            });
        }, 600);
    }

    function scrollTo4Page() {
        const projectsScroll = document.querySelector(
            ".projects"
        ) as HTMLElement | null;

        if (!projectsScroll) {
            return;
        }

        document.querySelectorAll(".wrapper").forEach((el) => {
            el.classList.add("wrapper--active");
        });
        setTimeout(() => {
            projectsScroll!.scrollTo({
                top: window.innerHeight * 3,
                behavior: "smooth",
            });
        }, 600);
    }

    return (
        <>
            <section className={styles.projects}>
                <div className={`${styles.wrapper} ${styles.wrapper1}`}>
                    <Image
                        className={styles.wrapper__img}
                        src={img1}
                        width={100}
                        height={100}
                        layout="responsive"
                        alt=""
                    />
                    <p>Pepa Bourek</p>
                    <a href="https://pepabourek.cz/" target="_blank">
                        pepabourek.cz
                    </a>
                </div>
                <div className={`${styles.wrapper} ${styles.wrapper2}`}>
                    <p>Prozubik</p>
                    <Image
                        className={styles.wrapper__img}
                        src={img2}
                        width={100}
                        height={100}
                        layout="responsive"
                        alt=""
                    />
                    <a href="https://prozubik.cz/" target="_blank">
                        prozubik.cz
                    </a>
                </div>
                <div className={`${styles.wrapper} ${styles.wrapper3}`}>
                    <p>Neresen</p>
                    <Image
                        className={styles.wrapper__img}
                        src={img3}
                        width={100}
                        height={100}
                        layout="responsive"
                        alt=""
                    />
                    <a href="https://neresen-cz.netlify.app/" target="_blank">
                        neresen.cz
                    </a>
                </div>
                <div className={`${styles.wrapper} ${styles.wrapper4}`}>
                    <Image
                        className={styles.wrapper__img}
                        src={img4}
                        width={100}
                        height={100}
                        layout="responsive"
                        alt=""
                    />
                </div>
            </section>
            <div className={styles.pagination}>
                <div
                    ref={page1}
                    onClick={scrollTo1Page}
                    className={`${styles.page1} ${styles.page__active}`}
                >
                    <span>01</span>
                </div>
                <div
                    ref={page2}
                    onClick={scrollTo2Page}
                    className={styles.page2}
                >
                    <span>02</span>
                </div>
                <div
                    ref={page3}
                    onClick={scrollTo3Page}
                    className={styles.page3}
                >
                    <span>03</span>
                </div>
                <div
                    ref={page4}
                    onClick={scrollTo4Page}
                    className={styles.page4}
                >
                    <span>04</span>
                </div>
            </div>
        </>
    );
};

export default Projects;
