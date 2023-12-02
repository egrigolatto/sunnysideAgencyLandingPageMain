import  Logo  from "./Logo"
import { NavBar } from "./NavBar"
import arrow from '../assets/images/icon-arrow-down.svg'
import iconHambur from "../assets/images/icon-hamburger.svg";
import { useState } from "react";


const Header = () => {

  const [openBtn, setOpenBtn] = useState(false);

  const manejarBtn = () => setOpenBtn(!openBtn)

  

    return (
      <header className="header">

        <div className="header__cont1">

          <a className="logo" href="#">
            <Logo fill="#fff" />
          </a>

          <div className={openBtn ? "navCont show" : "navCont"}>
            
            <div className="trianguloMenu"></div>
            <NavBar />
            <button className="btnContact">CONTACT</button>
          </div>

          <div className="hamburIcon" onClick={manejarBtn}>
            <img src={iconHambur} alt="iconHambur" />
          </div>
        </div>
        
        <div className="header__cont2">
          <h1>WE ARE <br /> CREATIVES</h1>
          <img src={arrow} alt="arrow" />
        </div>
      </header>
    );
}

export { Header }