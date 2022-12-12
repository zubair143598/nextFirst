import React from "react";

const Ownership = () => {
  return (
    <div className="Ownership-section" style={{marginBottom: "-14px"}}>
      <div className="container-fluid">
        <div className="row">
          <img
            src="./Assists/bg1.png"
            className="w-100 p-0 mx-0 position-relative"
            alt=""
          />
          <div className="col-lg-12 text-center position-absolute">
            <img
              src="./Assists/bg2.png"
              className="w-100 p-0 mx-0 position-relative"
              alt=""
            />
            <h3 className="head1 fw-bold text-white">
              TRUE OWNERSHIP OF IN-GAME ASSETS ON
            </h3>
            <h1 className="head2 fw-bold text-white">
              ETHEREUM & SOLANA BLOCKCHAIN
            </h1>
          </div>
          <div className="col-lg-4 position-absolute img3">
            <img src="./Assists/owner1.png" className="w-50" alt="" />
          </div>
          <div
            className="col-lg-4 position-absolute"
            style={{ left: "40%", top: "81rem" }}
          >
            <p className="p2">In Partnership With</p>
          </div>
          <div
            className="col-lg-4 position-absolute"
            style={{ right: "8%", top: "85rem" }}
          >
            <img src="./Assists/owner2.png" className="w-50" alt="" />
          </div>
          <div
            className="col-lg-6 position-absolute"
            style={{ top: "89rem", left: "27%" }}
          >
            <img
              src="./Assists/owner3.png"
              style={{ width: "35%", top: "89rem", left: "27%" }}
              alt=""
            />
          </div>
          <div
            className="col-lg-6 position-absolute"
            style={{ top: "89rem", right: "4%" }}
          >
            <img src="./Assists/owner5.png" style={{ width: "35%" }} alt="" />
          </div>
        </div>
      </div>
      <img src="./Assists/ownerbg2.png" className="w-100 position-relative  bg2" alt="" />
      <img src="./Assists/owner8.png" className="w-100 bg3" alt="" />
    </div>
  );
};

export default Ownership;
