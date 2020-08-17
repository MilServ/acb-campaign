import React, { useState } from "react";
import Modal from "react-modal";
import redshed from "../../images/redshed.jpg";
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
            src={redshed}
            className="brewerPartner"
            alt="Red Shed Brewing Co"
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
          Red Shed Brewing, of Cooperstown and Cherry Valley NY, has been
          delighting baseball fans and vacationers to central NY with
          hand-crafted beers using only local ingredients since 2017[?]. Their
          Red Shed brand includes 2019 NY State Silver Medal winner – Jessica’s
          Red Ale. A customer favorite.
        </p>
        <p id="modal-text">
          {" "}
          Their H. Clausen &amp; Son Series is a homage to the history of this
          region of NY and the classic beer recipes H. Clausen produced in the
          1800’s and early 1900s as the 9 th largest brewery in the country
          before prohibition.
        </p>
        <p id="modal-text">
          {" "}
          Jack Hasbrouck, owner of Red Shed will initially only be listing the
          Red Shed line on AmericanCraftBrands.com but we hope to convince him
          to share the limited-edition H. Clausen &amp; Son Series with those
          ‘down-state’ in the near future. The website is
          www.redshedbrewery.com.
          {/* for <a> tag rel="noopener noreferrer" */}
        </p>
      </Modal>
    </>
  );
}
