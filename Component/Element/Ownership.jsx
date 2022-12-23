import React from "react";

const Ownership = () => {
  return (
    <div className="Ownership-section" style={{ marginBottom: "-14px" }}>
      <div className="container-fluid">
        <div className="row">
          <img
            src="./Assists/bg1.png"
            style={{zIndex: "108"}}
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
      <img
        src="./Assists/ownerbg2.png"
        className="w-100 position-relative  bg2"
        alt=""
      />
      <img src="./Assists/owner8.png" className="w-100 bg3" alt="" />
      <div className="col-lg-6 p-5 paradiv"  >
        <h4 style={{marginTop:"21rem"}}>
          “By tokenizing Somnium In-Game assets and Land Parcels, we are forever
          decoupling Somnium Space as a company from owning and operating
          database of parcels and all in- game items by giving this power to our
          users”
        </h4>
        <ul className="mt-5">
          <li className="fs-4  fw-bolder">A Blockchain VR Metaverse</li>
          <li className="fs-4 mt-2 fw-bolder">Security of Ownership</li>
          <li className="fs-4 mt-2 fw-bolder">Authenticity of Origin</li>
          <li className="fs-4 mt-2 fw-bolder">Built with proven & secure standards</li>
          <li className="fs-4 mt-2 fw-bolder">Tradable via decentralized Marketplaces</li>
          <li className="fs-4 mt-2 fw-bolder">Built with proven & secure standards</li>
          <li className="fs-4 mt-2 fw-bolder" style={{paddingBottom:"18rem"}}>Cross-platform VR Client</li>
        </ul>
      </div>
    </div>
  );
};

export default Ownership;
