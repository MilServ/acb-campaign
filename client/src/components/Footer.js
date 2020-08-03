import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";

function Footer() {
  return (
    <div>
      <Container className="reactGridContainer text-center">
        <Row className="footerTop text-center">
          <Col
            xs={12}
            s={12}
            md={12}
            lg={12}
            style={{ paddingLeft: 60, paddingRight: 60 }}
          >
            <p style={{ padding: 8 }}>
              If you have questions click here and an ACB customer
              representative will be happy to show you how the platform works
              and help you get started. It takes less than 10 minutes.
            </p>
          </Col>
        </Row>

        <Row className="row text-center footerBottom">
          <Col>
            <b>Contact</b>
          </Col>

          <Col>
            <b>(508)-904-9425</b>
          </Col>

          <Col>SM ICONS</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
