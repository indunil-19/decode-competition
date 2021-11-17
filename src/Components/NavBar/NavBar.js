import React, { useState } from "react";
import "./NavBar.css";
import AcmLogo from "../../resources/images/acm-logo.png";
import decodeLogo from "../../resources/images/LogoWhite.png";

const NavBar = () => {
  const [show, setshow] = useState(false);
  const showNavBar = () => {
    setshow(!show);
  };
  return (
    <div>
      <nav>
        <div className="navBar row">
          <div className="logo col-3 col-md-3 col-sm-3">
            <img className={'decode-logo'} src={decodeLogo} alt={'decode-logo'} />
          </div>
          <div

            className="menuIcon col-9 col-md-9 col-sm-9"
          >
            <i onClick={showNavBar} class="fas fa-align-justify"></i>
          </div>
          <div
            className={
              show ? "col-md-12 col-sm-12" : "nav-links col-md-9 col-sm-9"
            }
          >
            <div className="row nav-row" >
              <div className="items col-md-2">
                <a href="#results">Rankings</a>
              </div>
              <div className="items col-md-2">
                <a href="#timeline">Timeline</a>
              </div>
              <div className="items col-md-2">
                <a href="#faq">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
