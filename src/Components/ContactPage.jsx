import React from "react";
import { FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="Contact_page text-center">
      <div className="container">
        <div className="icon_sec">
          <div className="row text-center">
            <div className="contactTwo_icon">
            <div className="col-md-3 col-sm-6 mb-4">
              <FaWhatsapp className="contactIcon" title="WhatsApp" />
              <h5>+917520965082</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <FaInstagram className="contactIcon" title="Instagram" />
              <h5>@AetherTalk</h5>
            </div>
            </div>
            <div className="contactTwo_icon">
            <div className="col-md-3 col-sm-6 mb-4">
              <FaTelegram className="contactIcon" title="Telegram" />
              <h5>Aether Talk</h5>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <FaTwitter className="contactIcon" title="Twitter" />
              <h5>Shoes Factory</h5>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5 text-center">
          <h2 className="ms-5 ps-5">Contact Us For More Info</h2>
          <div className="mailInfo d-flex justify-content-center align-items-center mt-4">
            <div className="for_mailPosition me-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control for_mailPosition_inp"
                aria-label="Enter Your Email Address"
               
              />
            <button className="for_mailPosition_btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
