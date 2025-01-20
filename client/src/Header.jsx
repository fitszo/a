import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <input type="checkbox" name="check" id="check" />
          <div className="logo-container">
            <Link to={"/"}>
              <img src="/logo.png" alt="" className="logo-a" />
            </Link>
          </div>
          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link nav-link-1">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-link nav-link-2">
                  <Link to={"/about-us"}> About Us</Link>
                </li>
                <li className="nav-link nav-link-3">
                  <Link to={'/contact-us'}>Contact</Link>
                </li>
                <li className="nav-link nav-link-4">
                  <Link to={'/join-us'}>List Your Gym</Link>
                </li>
              </ul>
            </div>
            <div className="log-sign nav-link-5">
              <a href="#" className="btn transparent">
                Log in
              </a>
              <a href="#" className="btn solid">
                Sign up
              </a>
            </div>
          </div>
          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
