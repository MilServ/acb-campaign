import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-grid-system";

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    minHeight: 155,
    color: "whitesmoke",
    fontWeight: "800",
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="text-center">
      <Container align="center" style={{ margin: "50px" }}>
        <Row align="center" className="text-center">
          <Col xs={12} s={12} md={4} lg={4}>
            <Card
              className={classes.root}
              style={{ backgroundColor: "#bb6125" }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Easy & Fast <br></br>5 minutes to install
                </Typography>
              </CardContent>
            </Card>
          </Col>

          <Col xs={12} s={12} md={4} lg={4}>
            <Card
              className={classes.root}
              style={{ backgroundColor: "#68813c" }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Easy & Fast <br></br>5 minutes to install
                </Typography>
              </CardContent>
            </Card>
          </Col>
          <Col xs={12} s={12} md={4} lg={4}>
            <Card
              className={classes.root}
              style={{ backgroundColor: "#bb6125" }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Easy & Fast <br></br>5 minutes to install
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
