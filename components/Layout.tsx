import { FC, ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<footer>
				<p>&copy; 2025 My Landing Page</p>
			</footer>

			<style jsx>{`
				header {
					background-color: #333;
					color: white;
					padding: 10px 0;
				}

				nav ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
					display: flex;
					justify-content: center;
				}

				nav li {
					margin: 0 20px;
				}

				nav a {
					color: white;
					text-decoration: none;
				}

				footer {
					text-align: center;
					padding: 20px;
					background-color: #333;
					color: white;
				}
			`}</style>
		</div>
	);
};

export default Layout;
