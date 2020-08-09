import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import SignUpForm from "../components/forms/SignUpModal";
import BuyNowForm from "../components/forms/BuyNowModal";

export default function Call2ActionBtns() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <SignUpForm />
            <BuyNowForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
