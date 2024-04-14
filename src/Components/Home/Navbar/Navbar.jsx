import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav
        className={`${style["navbar"]} me-0 navbar navbar-expand-lg navbar-light py-lg-0 mb-5 align-items-center 
        }`}
      >
        {" "}
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="logo" className="img-fluid" width="150px" />
          </Link>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item px-2">
                <Link
                  className={`nav-link ${style["nav-link"]}`}
                  aria-current="page"
                  to="/"
                >
                  Ar | فروعنا
                </Link>
              </li>
            </ul>

            <form className={`${style.input} d-flex ms-auto `}>
              <input
                type="text"
                className="form-control text-end"
                placeholder="كيف يمكننا مساعدتك"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
