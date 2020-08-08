import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import mayflower from "../../images/mayflower.jpg";

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
        style={{ "max-height": "calc(100vh - 5px)", overflowY: "auto" }}
        show={show}
        onHide={handleClose}
        closeButton
        onClick={handleClose}
      >
        {/* <Modal.Header style={{ backgroundColor: "red" }}>
          <Modal.Title>Signup Now</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {" "}
          <div className="container" style={{ padding: "20px" }}>
            <div className="row text-center">
              <img
                src={mayflower}
                className="brewerPartner"
                alt="mayflower brewing co logo"
                width="100px"
              />
            </div>
            <div
              className="row justify-content-center"
              style={{
                backgroundColor: "whitesmoke",
                padding: "50px",
                height: "600px",
              }}
            >
              <div className="col-md-8">
                <p>
                  {" "}
                  Mayflower Brewing’s founder, Drew Brosseau, and his small team
                  of artisan brewers in Plymouth, Massachusetts have been
                  delighting craft beer drinkers throughout New England with
                  unique and note-worthy tastes for several years.
                </p>
                <p>
                  {" "}
                  Mayflower received gold, silver and bronze awards and was
                  named Massachusetts Brewery of the year at the 2019 New York
                  beer competition.
                </p>
                <p>
                  {" "}
                  Mayflower’s entire portfolio of ‘core’ products
                  (www.mayflowerbrewing.com) have been approved for sale and the
                  New World IPA, Boomerang and OttoBahn are available via the
                  American Craft Brands platform.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
