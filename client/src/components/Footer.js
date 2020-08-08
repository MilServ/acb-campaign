import React from "react";
import { Container, Row, Col } from "react-grid-system";
import DemoForm from "../components/forms/demo";
import mayflower from "../images/mayflower.jpg";
import partner2 from "../images/scantic.jpeg";
import partner3 from "../images/stoneman.jpeg";
import partner4 from "../images/acbowlnotext.jpg";
import partner5 from "../images/vetownedbiz.png";
import partner6 from "../images/massbrew.png";
// import Call2ActionBtns from "./Call2ActionBtns";
import "../App.css";

function Footer() {
  return (
    <div>
      <Container
        className="reactGridContainer"
        style={{
          padding: 0,
          borderBottom: "solid #68813c 10px",
        }}
      >
        <Row
          className="nySkylineFormBg"
          style={{ marginTop: 50, height: "auto" }}
        >
          {/* <Col xs={12} s={12} md={6} lg={6}> */}
          {/* <div style={{ marginTop: 300 }}>
              <Call2ActionBtns />
            </div> */}
          {/* </Col> */}

          <Col xs={12} s={12} md={6} lg={6}>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <DemoForm />
            </div>
          </Col>
        </Row>

        <Row
          className="row text-center"
          style={{
            backgroundColor: "white",
            height: "15px",
            paddingTop: 20,
          }}
        >
          <Col>
            <b className="footerFont">OUR BREWER PARTNERS</b>
          </Col>
        </Row>
        <Row
          className="row text-center"
          style={{
            backgroundColor: "white",
            padding: 30,
            paddingBottom: 40,
          }}
        >
          <Col xs={3} s={3} md={2} lg={2}>
            <img
              src={mayflower}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="110px"
            />
          </Col>

          <Col xs={3} s={3} md={2} lg={2}>
            <img
              src={partner2}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              height="110px"
            />
          </Col>

          <Col xs={3} s={3} md={2} lg={2}>
            <img
              src={partner3}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="100px"
            />
          </Col>
          <Col xs={3} s={3} md={2} lg={2}>
            <img
              src={partner4}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="110px"
            />
          </Col>
          <Col xs={3} s={3} md={2} lg={2}>
            <img
              src={partner5}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="110px"
            />
          </Col>
          <Col xs={3} s={3} md={2} lg={2}>
            {" "}
            <img
              src={partner6}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="84px"
            />
          </Col>

          {/* <Col>
            <b>Contact</b>
          </Col>

          <Col>
            <b>(508)-904-9425</b>
          </Col>

          <Col>SM ICONS</Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
