import { FC } from "react";
import Layout from "../components/Layout";

const ContactPage: FC = () => {
    return (
        <Layout>
            <div className="container">
                <h1>Contact Us</h1>
                <p>If you have any questions, feel free to reach out!</p>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 50px 20px;
                    text-align: center;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;
                }

                form input,
                form textarea {
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                form button {
                    padding: 10px;
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                form button:hover {
                    background-color: #555;
                }
            `}</style>
        </Layout>
    );
};

export default ContactPage;
