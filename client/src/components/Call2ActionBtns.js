import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#bb6125"),
    backgroundColor: "#bb6125",
    "&:hover": {
      backgroundColor: "#bb6125",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    width: "155px",
    borderRadius: 20,
    fontSize: "0.90rem",
  },
}));

export default function Call2ActionBtns() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ColorButton
              variant="contained"
              color="primary"
              id="ctaBtns"
              className={classes.margin}
            >
              Sign-up Now
            </ColorButton>
          </Col>
          <Col>
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
              id="ctaBtns"
            >
              Request Demo
            </ColorButton>
          </Col>
          <Col>
            <ColorButton
              variant="contained"
              color="primary"
              id="ctaBtns"
              className={classes.margin}
            >
              Buy Now
            </ColorButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
