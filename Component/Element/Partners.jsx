import React from "react";

const Partners = () => {
  const data = [
    {
      img: "./Assists/partner1.png",
      title: "Somnium Space & Admix",
      text: "We work together to bring advertising revenues for our players. It's the best and fastest way to monetize your property, measure, analyze how your audience interacts in VR.",
    },
    {
      img: "./Assists/partner2.png",
      title: "High Fidelity & JanusVR",
      text: "We believe that the future of the VR space is in connectivity and interoperability between open social worlds. That’s why we partnered with HighFidelity and JanusVR on two groundbreaking projects:.",
    },
    {
      img: "./Assists/partner3.png",
      title: "Sony",
      text: "In 2019 we partnered with Sony and their amazing 3D model creation technology that allows our users to create full embodiment avatars of themselves in minutes alongside any 3D models for Somnium Store. Sony’s VR store in Somnium Space was among the world’s first.",
    },
    {
      img: "./Assists/partner4.png",
      title: "Polygon & OpenSea",
      text: "Our blockchain partners Polygon and OpenSea offer the best technology there is in their specific fields. OpenSea’s online platform is the largest marketplace for online collectibles, while Polygon’s unique second layer brings speed and close to zero transaction costs to our users for our in-game transactions.",
    },
    {
      img: "./Assists/partner5.png",
      title: "Cross Platform",
      text: "Available on all major VR headsets.",
    },
    {
        img: "./Assists/partner6.png",
        title: "Blockchain Gaming Alliance",
        text: "We became a member of Blockchain Game Alliance to contribute towards building a true and decentralized Metaverse.",
      },
      {
        img: "./Assists/partner7.png",
        title: "Somnium Space & Gemini",
        text: "We are excited to be partners with one of the leading exchanges in the world. Gemini has invested into Somnium Space and together we believe and work towards an open and decentralized future of The Metaverse.",
      },
      {
        img: "./Assists/partner8.png",
        title: "Somnium Space & Holaplex",
        text: "We have partnered with Holaplex to release our first official NFT store on Solana blockchain. We are delighted to work with this energetic and innovative team.",
      },
  ];
  return (
    <div className="Partners-section">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h3 className="head1">SOMNIUM SPACE</h3>
          <h1 className="head2">Partners</h1>
        </div>
        <div className="row ">
          {data.map((value,i) => {
            return (
              <>
                <div className="col-lg-2 mt-5">
                  <img
                    src={value.img}
                    style={{ width: "70%" }}
                    alt=""
                  />
                </div>
                <div className="col-lg-10 mt-5">
                  <h1 className="head3">{value.title}</h1>
                  <p className="p1 mb-4">{value.text}</p>
                </div>
              </>
            );
          })}

          
         
        </div>
      </div>
    </div>
  );
};

export default Partners;
