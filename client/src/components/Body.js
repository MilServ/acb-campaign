import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
import OwlCards from "../components/OwlCards";
import kegs from "../images/kegs.jpg";
import beerServer from "../images/beerserver.jpg";
import acbApp from "../images/acbapp.png";
import acbLogo from "./acblogo.jpg";

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

      <Container style={{ paddingTop: "20px", marginTop: "10px" }}>
        <Row className="text-center">
          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO KNOW WHAT <br></br>CUSTOMERS WANT NEXT.
            </b>
            <br></br>
            <img
              src={beerServer}
              style={{ marginTop: "30px" }}
              className="featured-images"
              alt="beer server"
            />
          </Col>

          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO ORDER BEFORE <br></br>INVENTORIES ARE GONE.
            </b>
            <br></br>
            <img
              style={{ marginTop: "30px" }}
              src={kegs}
              className="featured-images"
              alt="kegs"
            />
          </Col>
          <Col xs={12} s={12} md={4} lg={4}>
            <b className="first">FIRST</b>
            <br></br>
            <b className="firstText">
              TO TAKE ALL THAT TIME YOU WASTE <br></br>BUYING THE OLD WAY AND
              USE IT TO DO MORE SELLING THE NEW WAY.
            </b>
            <br></br>
            <img src={acbApp} className="featured-images" alt="ACB app" />
          </Col>
        </Row>

        <Row className="text-center">
          <OwlCards />
        </Row>

        <Row>
          <b className="first">
            POPULAR CRAFT LABELS NOW AVAILABLE FOR NEW YORK:
          </b>
        </Row>
        <Row>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">Brewer 1</b>
          </Col>

          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">Brewer 2</b>
          </Col>
          <Col xs={12} s={12} md={3} lg={3}>
            <b id="introducing">Brewer 3</b>
          </Col>
        </Row>
        <Row>
          <img src={acbLogo} className="App-logo text-center" alt="owl logo" />
        </Row>
        <Row>
          <Col xs={12} s={12} md={3} lg={3}>
            <div id="ctaBtns">Sign-up Now</div>
          </Col>

          <Col xs={12} s={12} md={3} lg={3}>
            <div id="ctaBtns">Demo</div>
          </Col>
          <Col xs={12} s={12} md={3} lg={3}>
            <div id="ctaBtns">Buy Now</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
