import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        const scrambledTxt = document.querySelectorAll(".js-scrambled-txt");

        scrambledTxt.forEach((el) => {
            const width = el.offsetWidth;
            const letters = "abcdefghijklmnopqrstuvwxyz";
            const value = el.textContent;
            let interval = null;
            el.addEventListener("mouseover", () => {
                el.style.width = `${width}px`;

                let iteration = 0;
                clearInterval(interval);

                interval = setInterval(() => {
                    el.innerText = el.innerText
                        .split("")
                        .map((letter, index) => {
                            // When iteration 0.2 we will return value with index 0, when iteration 1.2 we will return value with index 1
                            // first letter 1 iteration, second letter 6 iterations, third letter 11 iterations
                            if (index < iteration) {
                                return value[index];
                            }

                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("");

                    // max index is 14 so when 14.2 full text reveals but interval still active until iteration will be 15
                    // length 15
                    if (iteration >= value.length) {
                        clearInterval(interval);
                    }

                    // we add 0.2 each interval
                    if (value.length > 10) {
                        iteration += 1 / 4;
                    }
                    iteration += 1 / 5;
                    // interval repeats every 30 ms so letters change every 30 ms
                }, 30);
            });

            el.style.width = `${width}px`;

            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                el.innerText = el.innerText
                    .split("")
                    .map((letter, index) => {
                        // When iteration 0.2 we will return value with index 0, when iteration 1.2 we will return value with index 1
                        // first letter 1 iteration, second letter 6 iterations, third letter 11 iterations
                        if (index < iteration) {
                            return value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                // max index is 14 so when 14.2 full text reveals but interval still active until iteration will be 15
                // length 15
                if (iteration >= value.length) {
                    clearInterval(interval);
                }

                // we add 0.2 each interval
                if (value.length > 10) {
                    iteration += 1 / 4;
                }
                iteration += 1 / 5;
                // interval repeats every 30 ms so letters change every 30 ms
            }, 30);
        });
    }, []);

    return (
        <section className="home">
            {/* <h2>Digital design and development studio</h2> */}
            <p className="home__title js-scrambled-txt">
                My new site studio is coming soon
            </p>
            <p className="js-scrambled-txt">Stay tuned!</p>
            <div className="socials-container">
                <p className="socials__title js-scrambled-txt">Socials</p>
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
            <div className="related-container">
                <p className="related__title js-scrambled-txt">Related sites</p>
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
    );
};

export default Home;
