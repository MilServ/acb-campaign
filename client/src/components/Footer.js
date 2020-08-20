import React from "react";
import { Container, Row, Col } from "react-grid-system";
import DemoForm from "../components/forms/demo";
import partner1 from "../images/butternuts.jpeg";
import partner2 from "../images/lithology.png";
import partner3 from "../images/redshed.jpg";
import acbOwlNoText from "../images/acbowlnotext.jpg";
import ReactPlayer from "react-player";
import { SocialIcon } from "react-social-icons";
import vid from "../images/vid.mp4";
import "../App.css";
import Call2ActionBtns from "./Call2ActionBtns";

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
          <Col
            style={{ textAlign: "center", justifyContent: "center" }}
            xs={12}
            s={12}
            md={6}
            lg={6}
          >
            <ReactPlayer
              className="react-player text-center"
              style={{
                marginLeft: 50,
                marginTop: 50,
                marginRight: 50,
                height: "100%",
              }}
              url={vid}
              // src={vid}
              width="80%"
              height="auto"
              controls={true}
            />
            <div>
              <Call2ActionBtns />
            </div>
          </Col>

          <Col xs={12} s={12} md={6} lg={6} style={{ padding: 0 }}>
            <DemoForm />
          </Col>
        </Row>

        <Row
          className="row text-center"
          style={{
            backgroundColor: "white",

            padding: 15,
          }}
        >
          <Col xs={12} s={12} md={6} lg={6}>
            <b className="footerFont">OUR BREWER PARTNERS</b>
          </Col>
        </Row>
        <Row
          className="row text-center"
          style={{
            backgroundColor: "white",
            padding: 10,
            paddingBottom: 10,
          }}
        >
          <Col style={{ width: "80%" }} xs={4} s={4} md={2} lg={2}>
            <img
              src={partner1}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="100px"
            />
          </Col>

          <Col style={{ width: "80%" }} xs={4} s={4} md={2} lg={2}>
            <img
              src={partner2}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              height="100px"
            />
          </Col>

          <Col style={{ width: "80%" }} xs={4} s={4} md={2} lg={2}>
            <img
              src={partner3}
              className="brewerPartner"
              alt="mayflower brewing co logo"
              width="90px"
            />
          </Col>

          <Col
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginTop: 0,
              paddingTop: 0,
              borderLeft: "solid #68813c 1px",
            }}
            xs={12}
            s={12}
            md={3}
            lg={3}
          >
            <img
              src={acbOwlNoText}
              className="brewerPartner text-center"
              alt="American Craft Brands logo"
              width="110px"
            />
            <span
              style={{
                color: "#bb6125",
                display: "block",
                fontSize: "0.85rem",
                paddingTop: 0,
                marginTop: 0,
                marginBottom: 8,
              }}
            >
              <b>AmericanCraftBrands.com</b>
            </span>
          </Col>
          <Col
            className="text-center"
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
            xs={12}
            s={12}
            md={3}
            lg={3}
          >
            <div style={{ display: "block" }}>
              <SocialIcon
                style={{ margin: 3 }}
                url="https://www.linkedin.com/company/ninkasitechnologies/"
              />

              <SocialIcon
                style={{ margin: 3 }}
                url="https://www.facebook.com/americancraftbrands/"
              />

              <SocialIcon
                style={{ margin: 3 }}
                url="https://twitter.com/amercraftbrands"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
