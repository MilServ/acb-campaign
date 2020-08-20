import React, { useState } from "react";
import Modal from "react-modal";
import acbLogo from "../acblogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faHandshake } from "@fortawesome/free-solid-svg-icons";
import partner1 from "../../images/butternuts.jpeg";
import partner2 from "../../images/lithology.png";
import partner3 from "../../images/redshed.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    color: "white",
    width: "90%",
    padding: 25,
    overflowY: "scroll",
    maxHeight: "calc(100vh - 5px)",
    backgroundColor: "white",
    transform: "translate(-50%, -50%)",
  },
};

export default function PartnersList(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <span
        id="seeMoreBrewers"
        onClick={openModal}
        style={{
          margin: 0,
          width: "155px",
          borderRadius: 8,
          fontSize: "0.90rem",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faHandshake} /> See More Brewer Partners
      </span>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <img
            src={acbLogo}
            className="brewerPartner"
            alt="ACB Logo"
            width="100px"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={closeModal}
          style={{ cursor: "pointer", color: "#68813c" }}
        />
        <h2
          style={{
            backgroundColor: " #68813c",
            color: "white",
            textAlign: "center",
            padding: 5,
          }}
        >
          {" "}
          OUR BREWER PARTNERS
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="https://butternutsbeerandale.com/">
                <img
                  src={partner1}
                  className="brewerPartner"
                  alt="Butternuts Beer CO"
                  width="100px"
                  style={{ borderRadius: "10%", cursor: "pointer" }}
                />
              </a>
            </div>

            <div className="col-md-3">
              <a href="https://www.lithologybrewing.com">
                <img
                  src={partner2}
                  className="brewerPartner"
                  alt="Lithology Brewing Co"
                  width="100px"
                  style={{ borderRadius: "10%", cursor: "pointer" }}
                />
              </a>
            </div>

            <div className="col-md-3">
              <a href="https://www.redshedbrewing.com/">
                <img
                  src={partner3}
                  className="brewerPartner"
                  alt="Red Shed Brewery"
                  width="100px"
                  style={{ borderRadius: "10%", cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
          <p style={{ color: "black", marginTop: 20 }}>
            <em>
              Grow with us! Contact <b>sales@americancraftbrands.com</b> to
              learn how to get your brand listed here.
            </em>
          </p>
        </div>
      </Modal>
    </>
  );
}
