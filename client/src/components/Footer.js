import React from "react";
import { Container, Row, Col } from "react-grid-system";
import DemoForm from "../components/forms/demo";
// import Call2ActionBtns from "./Call2ActionBtns";
import "../App.css";

function Footer() {
  return (
    <div>
      <Container
        className="reactGridContainer"
        style={{ padding: 0, marginBottom: 50 }}
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
            height: "95px",
            paddingTop: 50,
          }}
        >
          <Col xs={12} s={12} md={2} lg={2}>
            <b>Logo 1</b>
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            <b>Logo 2</b>
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            Logo 3
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            Logo 4
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            Logo 5
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            Logo 5
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
