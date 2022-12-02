import React from "react";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container-fluid ps-0 ">
        <div className="row">
          <div className="col-md-12">
            <video
             
              autoPlay
              src="https://somniumspace.com/images/AvatarsAnimation.mp4"
              loop
              muted
              width="100.8%"
              height="auto"
            />
          </div>
          <div className="text-white  position-absolute">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <div className="col-12 text-center" style={{marginTop:"80%"}}>
                  <img className="mt-5" src="./Assists/pad.png" alt="" />
                  <img className="ms-2" src="./Assists/padhead.png" alt="" />

                  <button className="position-absolute btn1">Download</button>
                </div>
                <div className="row">
                  <div className="col-12 mt-4">
                    <img src="./Assists/Cube1.png" alt="" />
                    <p className="p1 d-inline">Access CUBEs</p>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="position-relative col-4">
                          <img
                            src="./Assists/btn1.png"
                            className=" w-100 "
                            alt=""
                          />
                          <img
                            src="./Assists/btn1t.png"
                            className=" position-absolute btn1t "
                            alt=""
                          />
                        </div>
                        <div className="position-relative col-4">
                          <img
                            src="./Assists/btn2.png"
                            className="w-100 "
                            alt=""
                          />
                          <img
                            src="./Assists/btn2t.png"
                            className=" position-absolute btn1t"
                            alt=""
                          />
                        </div>
                        <div className="position-relative col-4">
                          <img
                            src="./Assists/btn1.png"
                            className=" w-100 "
                            alt=""
                          />
                          <img
                            src="./Assists/btn3t.png"
                            className=" position-absolute btn1t"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4 text-end">
                <ul className="list-unstyled">
                  <li>
                    <div className="">
                      <img src="./Assists/right1.png" className="w-50 mt-2" alt="" />
                      <p className="p2">Virtual Reality</p>
                    </div>
                  </li>
                  <li>
                  <div className="">
                      <img src="./Assists/right2.png" className="w-50 " alt="" />
                      <p className="p2">Builder</p>
                    </div>
                  </li>
                  <li>
                  <div className="">
                      <img src="./Assists/right3.png" className="w-50 " alt="" />
                      <p className="p2">MarketPlace</p>
                    </div>
                  </li>
                  <li>
                  <div className="">
                      <img src="./Assists/right4.png" className="w-50 " alt="" />
                      <p className="p2">Unity SDK</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
