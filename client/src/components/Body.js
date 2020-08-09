import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
import OwlCards from "../components/OwlCards";
import kegs from "../images/kegs.jpg";
import beerServer from "../images/beerserver.jpg";
import acbApp from "../images/acbapp.png";
import acbLogo from "./acblogo.jpg";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import Call2ActionBtns from "../components/Call2ActionBtns";
import StoryModal1 from "../components/storyModals/StoryModal1";
import StoryModal2 from "../components/storyModals/StoryModal2";
import StoryModal3 from "../components/storyModals/StoryModal3";
// ACB Colors
// ACB Green: #68813c
// ACB Brown: #bb6125

function Body() {
  return (
    <div className="container mb-0">
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
              craft beer...
              <StoryModal1 />
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
              craft beer... <StoryModal2 />
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
              craft beer... <StoryModal3 />
            </p>
          </Col>
        </Row>
        <Row style={{ marginBottom: 70 }} className="text-center">
          <Col
            xs={8}
            s={8}
            md={3}
            lg={3}
            xlg={3}
            style={{
              maxHeight: "50px",
              paddingTop: "15px",
              paddingBottom: "10px",
              textAlign: "center",
            }}
          >
            <div id="seeMoreBrewers">
              <FontAwesomeIcon icon={faHandshake} /> See More Brewer Partners
            </div>
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

              paddingBottom: "10px",
            }}
          >
            <img src={acbLogo} className="App-logo-2" alt="logo" />
          </Col>
        </Row>
        {/* <Row className="text-center ctaBtnsRow">
          <Col>
            <Call2ActionBtns />
          </Col>
        </Row>{" "} */}
      </Container>

      <Footer />
    </div>
  );
}

export default Body;
