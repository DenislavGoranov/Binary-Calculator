import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link className="home" to="/">Calculator</Link>
            <Link className="explanations" to="/explanations">Explanations</Link>
            <Link className="about" to="/about">About</Link>
        </nav>
    );
}