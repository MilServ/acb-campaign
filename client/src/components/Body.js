import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-grid-system";
import OwlCards from "../components/OwlCards";
import owl from "../images/acbowlnotext.jpg";
import kegs from "../images/kegs.jpg";
import partner1 from "../images/butternuts.jpeg";
import beerServer from "../images/beerserver.jpg";
import partner2 from "../images/lithology.png";
import partner3 from "../images/redshed.jpg";
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
// ACB Green: #68813c , rgba(104, 129, 60, 0.75)
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
          <div
            className="col-md-6 headline-col"
            style={{ paddingLeft: "2.6rem", paddingRight: "2.6rem" }}
          >
            <b id="introducing">
              Introducing <span id="acbHeadline">AmericanCraftBrands.com</span>,
              the beverage purchasing <br id="displayNone"></br>platform that
              puts New York on and off-premise retailers in control.
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

        <Row
          className="text-center"
          style={{ marginTop: 50, marginBottom: 100 }}
        >
          <Col>
            <img src={owl} alt="ACB logo without text" width="40%" />
            <span
              style={{ color: "#bb6125", display: "block", fontSize: "1.5rem" }}
            >
              <b>AmericanCraftBrands.com</b>
            </span>

            <Call2ActionBtns />
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
          <Col xs={12} s={12} md={2} lg={2} style={{ paddingTop: 10 }}>
            {" "}
            <img
              src={partner1}
              className="brewerPics"
              alt="Butternuts Beer and Ale"
            />
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Butternuts Beer and Ale</b>
            <p className="brewerShortStory">
              Butternuts founder, Chuck Williamson, and his small team of
              professional artisan brewers in Garrattsville, NY have been ...
              <StoryModal1 />
            </p>
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <img
              src={partner2}
              className="brewerPics"
              alt="lithology beer company staff"
            />
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Lithology Brewing Company</b>
            <p className="brewerShortStory">
              Lithology Brewing, of Farmingdale, is a boutique brewer started by
              4 tech/science guys to produce...
              <StoryModal2 />
            </p>
          </Col>

          <Col xs={12} s={12} md={2} lg={2}>
            <img src={partner3} className="brewerPics" alt="beer server" />
          </Col>
          <Col xs={12} s={12} md={2} lg={2}>
            <b className="brewerTitle">Red Shed Brewing Company</b>
            <p className="brewerShortStory">
              Red Shed Brewing, of Cooperstown and Cherry Valley NY, has been
              delighting baseball fans and...
              <StoryModal3 />
            </p>
          </Col>
        </Row>

        <Row
          style={{ marginBottom: 40, justifyContent: "normal" }}
          className="text-center"
        >
          <Col
            xs={8}
            s={8}
            md={4}
            lg={4}
            xlg={4}
            style={{
              maxHeight: "50px",
              paddingTop: "24px",
              paddingBottom: "10px",
              textAlign: "center",
            }}
          >
            <div id="seeMoreBrewers">
              <FontAwesomeIcon icon={faHandshake} /> See More Brewer Partners
            </div>
          </Col>
        </Row>
        <Row align="center" className="bottomOwlRow" style={{ paddingTop: 28 }}>
          <Col xs={12} s={12} md={12} lg={12} xlg={12}>
            <p
              style={{
                color: "white",
                backgroundColor: "#68813c",
                padding: 30,
                borderRadius: 8,
              }}
            >
              All these great products and the ones still to come are available
              for ordering and retailer delivery via
              www.AmericanCraftBrands.com. Consumers can find them at selected
              bars, restaurants, and off- premise accounts for pick-up or home
              delivery. Ask for them by name or email the brewer the name and
              address of your favorite retailer and we will take it from there.
            </p>
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
