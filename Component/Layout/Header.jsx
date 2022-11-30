// // import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import {FaDiscord} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
// import {BsDiscord} from "react-icons/fa"


import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg bg-black">
      <div className="container-fluid">
        <div className="main d-flex flex-column">
          <div className="forupper">
            <button
              className=" color bg-white navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse  navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white "
                    saria-current="page"
                    href="/Home"
                  >
                    <img src="./Assists/download.png" className="w-75" alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  clr2 ms-5"
                    aria-current="page"
                    href="Home"
                  >
                    Blockchain
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link clr2 mx-3 " href="OurTeam">
                    Mechanics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  clr2 mx-3" href="Swap">
                    Partners
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  clr2 mx-3" href="#">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  clr2 mx-3" href="#">
                    Learn
                  </Link>
                </li>
              </ul>

              <div className="buttons">
                <button className="btn btn1 text-white">
                  Explore Somnium Map
                </button>
                <button className="btn btn2 text-white">MarketPlace</button>
              </div>

              <div>
                <p className="ms-5 p1 ">Download VR Client</p>
              </div>
            </div>
          </div>
          <div className="forlower text-white">
            <ul className="list-unstyled d-flex">
              <li className="login">
                <Link className="nav-link  clr2 mx-3" href="#">
                  Log in
                </Link>
              </li>
              <li className="border-start">
                <Link className="nav-link  clr2 mx-3" href="#">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link className="nav-link   ms-3 me-2 mt-1" href="#">
                  <FaDiscord size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
              <li>
                <Link className="nav-link me-2 mt-1" href="#">
                <FaFacebookF size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
              <li>
                <Link className="nav-link me-2 mt-1" href="#">
                <FaInstagram size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
              <li>
                <Link className="nav-link me-2 mt-1" href="#">
                <FaTelegram size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
              <li>
                <Link className="nav-link me-2 mt-1" href="#">
                <FaTwitter size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
              <li>
                <Link className="nav-link me-2 mt-1" href="#">
                <FaYoutube size={30} className="border border-2 rounded-5 p-1"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
