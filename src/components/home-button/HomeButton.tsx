import { Link } from "react-router-dom";
import "./home-button.css";

export function HomeButton() {
  return (
    <Link className="home-button" to="/">
      Back to home
    </Link>
  );
}
