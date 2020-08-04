import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-grid-system";
import owlHead from "../images/owlhead.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    minHeight: 170,
    color: "whitesmoke",
    fontWeight: "800",
    marginTop: -4,
    paddingTop: 0,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OwlCards() {
  const classes = useStyles();

  return (
    <div className="text-center">
      <Container align="center" style={{ margin: "50px" }}>
        <Row align="center" className="text-center">
          <Col xs={12} s={12} md={4} lg={4} style={{ paddingBottom: 15 }}>
            {" "}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                <img src={owlHead} className="owlLookingDown" alt="logo" />
              </div>
              <Card
                className={classes.root}
                style={{ backgroundColor: "#bb6125" }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" className="owlCards">
                    Easy & Fast <br></br>5 minutes to install
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Col>

          <Col xs={12} s={12} md={4} lg={4} style={{ paddingBottom: 15 }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                <img src={owlHead} className="owlLookingDown" alt="logo" />
              </div>
              <Card
                className={classes.root}
                style={{ backgroundColor: "#68813c" }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" className="owlCards">
                    Full Control <br></br>Order only what you want
                    <br></br>
                    when you want it
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Col>
          <Col xs={12} s={12} md={4} lg={4} style={{ paddingBottom: 15 }}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
              >
                <img src={owlHead} className="owlLookingDown" alt="logo" />
              </div>
              <Card
                className={classes.root}
                style={{ backgroundColor: "#bb6125" }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" className="owlCards">
                    It's Free <br></br>It costs $0 to sign up.
                    <br></br>$0 to use.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
