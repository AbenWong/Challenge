import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // init useState hook
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://image.photocnc.com/aoaodcom/png/netflix/netflix_PNG11.png?down"
          alt=""
        />
        {/*  */}
        <img
          className="nav_avatar"
          src="https://lh3.googleusercontent.com/ogw/AOh-ky1R2zEg7_HjXYnMHdxDVodpV4dMfz2erZo5toSV=s32-c-mo"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
