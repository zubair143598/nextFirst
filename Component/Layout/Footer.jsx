import {FaDiscord} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-section bg-black">
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-3 ps-5">
            <img src="./Assists/download.png" className="mt-4 ps-2" alt="" />
            <br />
            <p className="p1 ps-2">
              {" "}
              @ 2022 by Somnium Space LTD. Somnium Space and Somnium Space Logo
              are trademarks of Somnium Space LTD. All other trademarks are the
              property of their respective owners. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 mt-4 ps-4 d-flex">
            <ul className="list-unstyled">
              <li>
                <p className="p2">Get Somnium</p>
              </li>
              <li>
                <p className="p2">Events</p>
              </li>
            </ul>
            <ul className="list-unstyled ms-5">
              <li>
                <p className="p2">Patners</p>
              </li>
              <li>
                <p className="p2">Support</p>
              </li>
            </ul>
            <ul className="list-unstyled ms-5">
              <li>
                <p className="p2">Terms of Service</p>
              </li>
              <li>
                <p className="p2">Privacy Policy</p>
              </li>
            </ul>
            <ul className="list-unstyled ms-5">
              <li>
                <p className="p2">FAQs</p>
              </li>
              <li>
                <p className="p2">Contact</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-3">
            <p>
            <FaDiscord size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <FaFacebookF  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <FaTwitter  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            </p>
            <p>
            <FaInstagram  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <FaTelegram  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            <FaYoutube  size={45} className="border border-5 rounded-5 p-1 m-1"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
