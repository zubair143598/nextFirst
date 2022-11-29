// // import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import Link from "next/link"



const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link
          className="nav-link text-white  clr"
          saria-current="page"
          href="/Home"
        >
          <img src="./Assists/download.png" alt="" />
        </Link>
        
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link  clr2 ms-5" aria-current="page" href="Home">
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
            <button className="btn btn1 text-white">Explore Somnium Map</button>
            <button className="btn btn2 text-white">MarketPlace</button>
          </div>
          <div>
            <p className="ms-5 p1 ">Download VR Client</p>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header