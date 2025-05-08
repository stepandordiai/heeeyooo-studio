import { FC } from "react";
import Layout from "../components/Layout";
import styles from "./../styles/Home.module.scss";

const HomePage: FC = () => {
	return (
		<Layout>
			<section className={styles.home}>
				<p className={`${styles.home__title} js-scrambled-txt`}>
					My new site studio is coming soon
				</p>
				<p className="js-scrambled-txt">Stay tuned!</p>
				<div className={`${styles.socials__container}`}>
					<p className={`${styles.socials__title} js-scrambled-txt`}>Socials</p>
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
