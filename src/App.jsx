import Projects from "./Projects/Projects";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
