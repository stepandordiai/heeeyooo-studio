import { FC } from "react";
import Layout from "../components/Layout";
// import { useEffect } from "react";
import styles from "./../styles/Home.module.scss";

const HomePage: FC = () => {
    // useEffect(() => {
    //     const scrambledTxt = document.querySelectorAll(".js-scrambled-txt");

    //     scrambledTxt.forEach((el) => {
    //         const pElement = el as HTMLParagraphElement;

    //         const letters: string = "abcdefghijklmnopqrstuvwxyz";
    //         const value = pElement.textContent;
    //         let interval: any = null;

    //         function animateChars() {
    //             let iteration = 0;
    //             clearInterval(interval);

    //             interval = setInterval(() => {
    //                 pElement.innerText = pElement.innerText
    //                     .split("")
    //                     .map((letter: string, index: number) => {
    //                         // When iteration 0.2 we will return value with index 0, when iteration 1.2 we will return value with index 1
    //                         // first letter 1 iteration, second letter 6 iterations, third letter 11 iterations
    //                         if (index < iteration) {
    //                             return value![index];
    //                         }

    //                         return letters[Math.floor(Math.random() * 26)];
    //                     })
    //                     .join("");

    //                 if (iteration >= value!.length) {
    //                     clearInterval(interval);
    //                 }

    //                 if (value!.length > 10) {
    //                     iteration += 1 / 4;
    //                 }
    //                 iteration += 1 / 2.5;
    //             }, 30);
    //         }

    //         el.addEventListener("mouseover", () => {
    //             // el.style.width = `${width}px`;
    //             animateChars();
    //         });
    //         el.addEventListener("touchstart", () => {
    //             animateChars();
    //         });

    //         animateChars();
    //     });
    // }, []);
    return (
        <Layout>
            <section className={styles.home}>
                {/* <h2>Digital design and development studio</h2> */}
                <p className={`${styles.home__title} js-scrambled-txt`}>
                    My new site studio is coming soon
                </p>
                <p className="js-scrambled-txt">Stay tuned!</p>
                <div className={`${styles.socials__container}`}>
                    <p className={`${styles.socials__title} js-scrambled-txt`}>
                        Socials
                    </p>
                    <ul>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://github.com/stepandordiai"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://t.me/heeeyooo"
                                target="_blank"
                            >
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://www.instagram.com/heeeyooo.studio"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.related__container}`}>
                    <p className={`${styles.related__title} js-scrambled-txt`}>
                        Related sites
                    </p>
                    <ul>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://prozubik.cz"
                                target="_blank"
                            >
                                prozubik.cz
                            </a>
                        </li>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://pepabourek.cz"
                                target="_blank"
                            >
                                pepabourek.cz
                            </a>
                        </li>
                        <li>
                            <a
                                className="js-scrambled-txt"
                                href="https://stepandordiai.netlify.app"
                                target="_blank"
                            >
                                stepandordiai.com
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default HomePage;
