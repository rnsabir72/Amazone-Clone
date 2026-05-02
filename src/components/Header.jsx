import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  const [translateX, settranslateX] = useState("-150vw");
  const [savedAddress, setSavedAddress] = useState("");
  function handelSideMenuDisplay() {
    translateX === "-150vw" ? settranslateX("0") : settranslateX("-150vw");
  }
  useEffect(() => {
    const address = localStorage.getItem("userAddress");
    if (address) {
      setSavedAddress(address);
    }
  }, []);
  return (
    <div>
      <SideMenu display={translateX} handelDisplay={handelSideMenuDisplay} />
      <nav className="flex navbar">
        <div
          className="hamburger display-toggle"
          onClick={handelSideMenuDisplay}
        >
          <MenuIcon />
        </div>
        <Link to="/">
          <div className="logo">
            <img src="./logo.png" alt="" />
          </div>
        </Link>
        <Link to="/address">
          <div className="log">
            {savedAddress ? (
              <>
                <div style={{ fontSize: "14px" }}>
                  <i className="fas fa-map-marker-alt" style={{ color: "#007185" }}></i> Deliver to
                </div>
                <div style={{ fontWeight: "bold", fontSize: "14px", maxWidth: "400px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {savedAddress}
                </div>
              </>
            ) : (
              <>
                Hello <br />
                <span className="bold">
                  <i className="fas fa-map-marker-alt"></i>
                  Select your address
                </span>
              </>
            )}
          </div>
        </Link>
        <form className="flex">
          <input type="text" placeholder="Search" />
          <button className="btn">
            <SearchIcon />
          </button>
        </form>
        <div className="flag" title="Pakistan"></div>
        <Link to="/Sign-In">
          <div className="log">
            Hello Sign in
            <br />
            <span className="bold"> Account & Lists</span>
          </div>
        </Link>
        <div className="log">
          Returns <br />
          <span className="bold ">&Orders</span>
        </div>
        <Link to="/cart">
          <div className="cart ">
            <span className="bold">
              <span className="item-count">{basket.length}</span>
              <i className="fas fa-shopping-cart fa-2x"></i>
              Cart
            </span>
          </div>
        </Link>
        <Link to="/Sign-In">
          <div className="display-toggle signIn">
            <Button>Sign In</Button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
