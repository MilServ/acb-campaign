import React, { useState } from "react";
import Modal from "react-modal";
import partner1 from "../../images/butternuts.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    color: "white",
    backgroundColor: "rgba(104,129,60,.85)",
    transform: "translate(-50%, -50%)",
  },
};

export default function StoryModal1(props) {
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
        onClick={openModal}
        id="readMore"
        style={{
          margin: 0,
          width: "155px",
          borderRadius: 20,
          fontSize: "0.90rem",
          cursor: "pointer",
        }}
        // className={classes.margin}
      >
        {" "}
        >Read more
      </span>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <img
            src={partner1}
            className="brewerPartner"
            alt="Butternuts Beer and Ale logo"
            width="100px"
            style={{ borderRadius: "10%" }}
          />
        </div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        />
        <p id="modal-text">
          {" "}
          Butternuts Beer and Ale founder, Chuck Williamson, and his small team
          of professional artisan brewers in Garrattsville, New York have been
          delighting craft beer drinkers throughout the Northeast US with tried-
          and-true, unique, and note-worthy brews since 2007.
        </p>
        <p id="modal-text">
          {" "}
          Chuck started in the industry making and selling other folk’s beer in
          Brooklyn during the late 90s but decided he’d give country life and
          country brewing a go.
        </p>
        <p id="modal-text">
          {" "}
          Success followed him to his converted dairy barn brewery in
          Garrattsville with such hit country beers as Porkslap, Moo Thunder,
          and a variety of other interesting tastes – which are available across
          7 states.
        </p>

        <p id="modal-text">
          Chuck is now introducing a new brand called Burning Banjo in honor of
          country folk and those with their heart in the country at this
          difficult time. Visit their website at www.butternutsbeer.com.
        </p>
      </Modal>
    </>
  );
}
