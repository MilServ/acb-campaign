import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import redshed from "../../images/redshed.jpg";

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
                src={redshed}
                className="brewerPartner"
                alt="mayflower brewing co logo"
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
                  Red Shed Brewing, of Cooperstown and Cherry Valley NY, has
                  been delighting baseball fans and vacationers to central NY
                  with hand-crafted beers using only local ingredients since
                  2017[?]. Their Red Shed brand includes 2019 NY State Silver
                  Medal winner – Jessica’s Red Ale. A customer favorite.
                </p>
                <p id="modal-text">
                  {" "}
                  Their H. Clausen &amp; Son Series is a homage to the history
                  of this region of NY and the classic beer recipes H. Clausen
                  produced in the 1800’s and early 1900s as the 9 th largest
                  brewery in the country before prohibition.
                </p>
                <p id="modal-text">
                  {" "}
                  Jack Hasbrouck, owner of Red Shed will initially only be
                  listing the Red Shed line on AmericanCraftBrands.com but we
                  hope to convince him to share the limited-edition H. Clausen
                  &amp; Son Series with those ‘down-state’ in the near future.
                  The website is www.redshedbrewery.com.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
