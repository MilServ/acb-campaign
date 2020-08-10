import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import lithology from "../../images/lithology.png";

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
                src={lithology}
                className="brewerPartner"
                alt="Lithology Brewing Co"
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
                  Lithology Brewing, of Farmingdale, is a boutique brewer
                  started by 4 tech / science guys to produce
                  professionally-crafted artisan beers.
                </p>

                <p id="modal-text">
                  They start with ingredients from artisan growers and extend
                  that focus on quality all the way through the brewing process
                  – and it shows.
                </p>

                <p id="modal-text">
                  They have won awards for their Sunrise Summer Ale and their
                  Brown Ale. They have also twice been named ‘Brewery of the
                  Year’ in their category.
                </p>

                <p id="modal-text">
                  Until now, Lithology’s products have only been available at
                  the brewery and in local retailers. They now want to bring
                  their products to all of the NY Metro area – and share the
                  comfort of knowing that professionally brews come in all
                  shapes and sizes.
                </p>

                <p id="modal-text">
                  It’s the ingredients and the people who assemble and nurture
                  them that makes a great beer. The website is
                  <a href="http://www.lithologybrewing.com" target="_blank">
                    {" "}
                    www.lithologybrewing.com.
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
