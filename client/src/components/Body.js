import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";

function Body() {
  return (
    <div className="container">
      <div className="container nySkyline">
        <div className="row text-center">
          {/* dfghjkl;k */}
          {/* <div className="col-md-6" style={{ paddingTop: "5px" }}> */}
          <h1 id="first2Know">
            FIRST TO KNOW,<br></br> FIRST TO GROW.
          </h1>
          {/* </div> */}
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <b id="introducing">
              Introducing the beverage purchasing platform that<br></br> puts
              New York on and off-premise retailers in control.
            </b>
          </div>
        </div>
      </div>

      <Container style={{ paddingTop: "20px" }}>
        <Row className="text-center">
          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO KNOW WHAT <br></br>CUSTOMERS WANT NEXT.
            </b>
          </Col>

          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO ORDER BEFORE <br></br>INVENTORIES ARE GONE.
            </b>
          </Col>
          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO TAKE ALL THAT TIME YOU WASTE <br></br>BUYING THE OLD WAY AND
              USE IT TO DO MORE SELLING THE WAY.
            </b>
          </Col>
        </Row>

        <Row className="text-center">
          {/* Photos go in these columns */}
          <Col xs={12} s={12} md={4} lg={4}></Col>

          <Col xs={12} s={12} md={4} lg={4}></Col>
          <Col xs={12} s={12} md={4} lg={4}></Col>
        </Row>
        <Row>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>

          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>
        </Row>
        <Row>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>

          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">n control.</b>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
