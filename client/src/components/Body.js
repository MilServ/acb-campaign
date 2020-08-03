import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
import OwlCards from "../components/OwlCards";
import kegs from "../images/kegs.jpg";
import beerServer from "../images/beerserver.jpg";
import acbApp from "../images/acbapp.png";
import acbLogo from "./acblogo.jpg";
import Call2ActionBtns from "./Call2ActionBtns";
import Footer from "./Footer";

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
              Introducing the beverage purchasing platform that
              <br id="displayNone"></br> puts New York on and off-premise
              retailers in control.
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
          <Col>
            <OwlCards />
          </Col>
        </Row>

        <Row className="popularCraftRow">
          <Col>
            <b className="first">
              POPULAR CRAFT LABELS NOW AVAILABLE FOR NEW YORK:
            </b>
          </Col>
        </Row>
        <Row>
          <Col xs={12} s={12} md={2} lg={2}>
            {" "}
            <img src={beerServer} className="brewerPics" alt="beer server" />
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Acme Beer Co.</b>
            <p className="brewerShortStory">
              Mayflower Brewing’s founder, Drew Brosseau, and his small team of
              artisan brewers in Plymouth, Massachusetts have been delighting
              craft beer<span id="readMore"> > Learn more</span>
            </p>
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <img src={beerServer} className="brewerPics" alt="beer server" />
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Brewer 2</b>
            <p className="brewerShortStory">
              Mayflower Brewing’s founder, Drew Brosseau, and his small team of
              artisan brewers in Plymouth, Massachusetts have been delighting
              craft beer<span id="readMore"> > Learn more</span>
            </p>
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            <img src={beerServer} className="brewerPics" alt="beer server" />
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Brewer 3</b>
            <p className="brewerShortStory">
              Mayflower Brewing’s founder, Drew Brosseau, and his small team of
              artisan brewers in Plymouth, Massachusetts have been delighting
              craft beer<span id="readMore"> > Learn more</span>
            </p>
          </Col>
        </Row>
        <Row align="center" className="text-center center bottomOwlRow">
          <Col
            xs={12}
            s={12}
            md={12}
            lg={12}
            xlg={12}
            className="App-header text-center"
            style={{
              maxHeight: "150px",
              paddingTop: "28px",
              paddingBottom: "10px",
            }}
          >
            <img src={acbLogo} className="App-logo-2" alt="logo" />
          </Col>
        </Row>
        <br></br>
        <Row className="text-center ctaBtnsRow">
          <Col>
            <Call2ActionBtns />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Body;