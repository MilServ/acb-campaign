import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import partner1 from "../../images/butternuts.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
    width: "155px",
    borderRadius: 20,
    fontSize: "0.90rem",
  },
}));

export default function StoryModal1(props) {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        id="readMore"
        className={classes.margin}
      >
        {" "}
        >Read more
      </span>

      <Modal
        size="md"
        variant="primary"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ maxHeight: "calc(100vh - 5px)", overflowY: "auto" }}
        show={show}
      >
        <Modal.Body>
          {" "}
          <div className="container" style={{ padding: "20px" }}>
            <div className="row">
              <div className="col-md-1">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  onHide={handleClose}
                  closebutton
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="row text-center">
              <img
                src={partner1}
                className="brewerPartner"
                alt="Butternuts Beer and Ale logo"
                width="100px"
              />
            </div>
            <div
              className="row justify-content-center"
              style={{
                backgroundColor: "#68813c",
                borderRadius: 10,
                padding: "40px",
                height: "600px",
                color: "whitesmoke",
                fontWeight: 300,
              }}
            >
              <div className="col-md-8">
                <p id="modal-text">
                  {" "}
                  Butternuts Beer and Ale founder, Chuck Williamson, and his
                  small team of professional artisan brewers in Garrattsville,
                  New York have been delighting craft beer drinkers throughout
                  the Northeast US with tried- and-true, unique, and note-worthy
                  brews since 2007.
                </p>
                <p id="modal-text">
                  {" "}
                  Chuck started in the industry making and selling other folk’s
                  beer in Brooklyn during the late 90s but decided he’d give
                  country life and country brewing a go.
                </p>
                <p id="modal-text">
                  {" "}
                  Success followed him to his converted dairy barn brewery in
                  Garrattsville with such hit country beers as Porkslap, Moo
                  Thunder, and a variety of other interesting tastes – which are
                  available across 7 states.
                </p>

                <p id="modal-text">
                  Chuck is now introducing a new brand called Burning Banjo in
                  honor of country folk and those with their heart in the
                  country at this difficult time. Visit their website at{" "}
                  <a
                    href="http://www.butternutsbeer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.butternutsbeer.com.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
