import { FC } from "react"
import Layout from "../components/Layout"

const AboutPage: FC = () => {
	return (
		<Layout>
			<div className="container">
				<h1>About Us</h1>
				<p>
					We are dedicated to providing top-quality products with the best
					service.
				</p>
			</div>
			<style jsx>{`
				.container {
					text-align: center;
					padding: 50px 20px;
				}

				h1 {
					font-size: 2.5rem;
				}

				p {
					font-size: 1.2rem;
				}
			`}</style>
		</Layout>
	)
}

export default AboutPage
