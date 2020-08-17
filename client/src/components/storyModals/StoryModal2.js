import React, { useState } from "react";
import Modal from "react-modal";
import lithology from "../../images/lithology.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: 10,
    marginBottom: 8,
    overflow: "auto",
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
            src={lithology}
            className="brewerPartner"
            alt="Butternuts Beer and Ale logo"
            width="100px"
            style={{ borderRadius: "5%" }}
          />
        </div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        />
        <p id="modal-text">
          {" "}
          Lithology Brewing, of Farmingdale, is a boutique brewer started by 4
          tech / science guys to produce professionally-crafted artisan beers.
        </p>

        <p id="modal-text">
          They start with ingredients from artisan growers and extend that focus
          on quality all the way through the brewing process – and it shows.
        </p>

        <p id="modal-text">
          They have won awards for their Sunrise Summer Ale and their Brown Ale.
          They have also twice been named ‘Brewery of the Year’ in their
          category.
        </p>

        <p id="modal-text">
          Until now, Lithology’s products have only been available at the
          brewery and in local retailers. They now want to bring their products
          to all of the NY Metro area – and share the comfort of knowing that
          professionally brews come in all shapes and sizes.
        </p>

        <p id="modal-text">
          It’s the ingredients and the people who assemble and nurture them that
          makes a great beer. The website is www.lithologybrewing.com.
        </p>
      </Modal>
    </>
  );
}
