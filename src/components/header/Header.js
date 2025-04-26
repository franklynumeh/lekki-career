import React, { useContext, useState } from "react";
import "./header.css";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import GeneralContext from "../../context/GeneralContext";

const Header = () => {
  const { dark, setDark } = useContext(GeneralContext);
  const [Toggle, showMenu] = useState(false);

  const handleLight = () => {
    setDark(!dark);
  };
  return (
    <header className={dark ? "header-dark" : "dark"}>
      <nav className="nav container">
        <a
          href="#contact"
          className="nav__link"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#ffffff", // correct white
            color: "#8e5e00", // black text
            border: "2px solid #8e5e00", // gold-brown border
            borderRadius: "16px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
        >
          Apply
        </a>
        <div href="#qualification" className="new">
          LEKKI ISLAND CAREERS
        </div>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {/* <li className="nav__item">
              <a href="#home" className="nav__link ">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
           
            <li className="nav__item">
              <a href="#testimonial" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Porfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li> */}
          </ul>
          {/* <i
            class="uil uil-times nav__close "
            onClick={() => showMenu(!Toggle)}
          ></i> */}
        </div>
        {/* <li className="nav__item"> */}
        {/* <div className="nav__logo">
          <p>
            
            {dark ? (
            
              <MdOutlineLightMode className="toggleButton" onClick={handleLight} />
            ) : (
              <MdOutlineDarkMode className="toggleButton" onClick={handleLight} />
            )}
          </p>
        </div> */}

        {/* <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
