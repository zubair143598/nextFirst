import React from "react";

const Virtual = () => {
  return (
    <div className="Virtual-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="head1">SOMNIUM SPACE IS A</h3>
            <h1 className="head2">VIRTUAL REALITY WORLD</h1>
            <h3 className="head1 pt-1">Open, Social & Persistent</h3>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 mt-5 text-end">
            <p className="p1 ms-3 ">
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </p>
            <img src="/Assists/virtual2.png" className="w-50 img2" alt="" />
            <p className="p4" style={{ position: "relative", top: "70px" }}>
              Chat, Build, <br />
              Trade in dedicated Somnium PC client
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <img src="./Assists/virtual1.png" className="w-100 virimg" alt="" />
            <p className="p4">
              PC VR Mode <br />
              Live Inside Somnium World
            </p>
          </div>
          <div className="col-lg-4">
            <p className="p1 me-3 pt-5">
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </p>
            <img src="/Assists/virtual3.png" className="w-50 img3" alt="" />
            <p
              className="p4"
              style={{ position: "relative", top: "4rem",  }}
            >
              Oculus Quest <br />
              Compatible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
