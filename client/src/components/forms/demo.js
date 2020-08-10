import React, { useState, PropTypes } from "react";
// import { API } from "../../utils/API";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

// import { withRouter } from "next/router";
// import Router from "next/router";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#bb6125"),
    backgroundColor: "#bb6125",
    "&:hover": {
      backgroundColor: "#bb6125",
    },
    margin: {
      margin: theme.spacing(2),
      width: "155px",
      borderRadius: 20,
      fontSize: "0.90rem",
    },
  },
}))(Button);

export default function DemoForm(props) {
  const classes = useStyles();
  const [demoFirstN, setDemoFirstN] = useState("");
  const [demoLastN, setDemoLastN] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoLicState, setDemoLicState] = useState("");
  const [demoStateLicNo, setDemoStateLicNo] = useState("");
  const [demoBizName, setDemoBizName] = useState("");
  const [demoBizStreet, setDemoBizStreet] = useState("");
  const [demoBizCity, setDemoBizCity] = useState("");
  const [demoBizState, setDemoBizState] = useState("");
  const [demoBizZip, setDemoBizZip] = useState("");
  // const [demoPhoneNo, setDemoPhoneNo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      demoLastN,
      demoFirstN,
      demoEmail,
      demoLicState,
      demoStateLicNo,
      demoBizName,
      demoBizStreet,
      demoBizCity,
      demoBizState,
      demoBizZip,
      // demoPhoneNo,
    };

    Axios.post("api/demo/demo", formData).then((response) => {
      if (response.data.success) {
        alert(
          "Thank you, " +
            formData.demoBizName +
            ". Your request for a demo has been successfully submitted. An American Craft Brands Rep will contact you within 24 business hours to schedule a demo."
        );
      } else {
        alert("Sorry.  Failed to submit form");
      }
    });
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(0,0,0,0.75", padding: "50px" }}
    >
      <form onSubmit={onSubmit}>
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-12">
            <h2>
              <b
                style={{
                  color: "whitesmoke",
                }}
              >
                SCHEDULE A DEMO
              </b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4
              style={{
                color: "whitesmoke",
                fontWeight: "400",
                fontSize: ".90rem",
              }}
            >
              Sign up today for a free, no-obligation demo. A representative
              will contact you within 24 hours to book a time that's right for
              you.
            </h4>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="row left text-left">
            <div className="col-md-2 mb-2">
              <label
                style={{
                  color: "whitesmoke",
                  fontWeight: "500",
                  fontSize: ".80rem",
                  marginBottom: 10,
                }}
              >
                Business Contact Person{" "}
              </label>
            </div>
          </div>
          <div className="row pt-2" style={{ marginTop: "8px" }}>
            <div className="col-md-12 pt-2">
              <input
                style={{
                  height: 30,
                  width: "40%",
                  border: "solid #383838 .75px",
                  borderRadius: 5,
                  marginLeft: 2,
                  marginRight: 3,
                }}
                value={demoFirstN}
                onChange={(e) => setDemoFirstN(e.target.value)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
              />

              <input
                style={{
                  border: "solid #383838 .75px",
                  borderRadius: 5,
                  height: 30,
                  width: "40%",
                }}
                value={demoLastN}
                onChange={(e) => setDemoLastN(e.target.value)}
                placeholder="Last name"
                type="text"
                name="lastName"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <input
                style={{
                  border: "solid #383838 .75px",
                  borderRadius: 5,
                  marginLeft: 2,
                  height: 30,
                  marginTop: 8,
                  width: "82%",
                }}
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <br></br>
          </div>
        </div>

        <div>
          <label
            style={{
              color: "whitesmoke",
              fontWeight: "500",
              fontSize: ".80rem",
            }}
          >
            Business Information{" "}
          </label>
          <br></br>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "81%",
            }}
            value={demoBizName}
            onChange={(e) => setDemoBizName(e.target.value)}
            placeholder="Business Name"
            type="text"
            name="Business Name"
            required
          />
          <br></br>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "81%",
            }}
            value={demoBizStreet}
            onChange={(e) => setDemoBizStreet(e.target.value)}
            placeholder="Business Street Address"
            type="text"
            name="Business Street Address"
            required
          />
        </div>
        <div>
          {/* <label
            style={{
              marginTop: "20px",
              marginRight: 3,
              color: "black",
              fontWeight: "600",
              fontSize: ".90rem",
            }}
          >
            Select Military Affiliation{" "}
          </label> */}
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "40.5%",
            }}
            value={demoBizCity}
            onChange={(e) => setDemoBizCity(e.target.value)}
            placeholder="Business City"
            type="text"
            name="Business City"
            required
          />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "10%",
            }}
            value={demoBizState}
            onChange={(e) => setDemoBizState(e.target.value)}
            placeholder="State"
            type="text"
            name="Business State"
            required
          />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "23%",
            }}
            value={demoBizZip}
            onChange={(e) => setDemoBizZip(e.target.value)}
            placeholder="Zip Code"
            type="text"
            name="Company Zip Code"
            // required
          />

          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "28%",
            }}
            value={demoLicState}
            onChange={(e) => setDemoLicState(e.target.value)}
            placeholder="Business Lic. State"
            type="text"
            name="Business License State"
            required
          />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "50%",
            }}
            value={demoStateLicNo}
            onChange={(e) => setDemoStateLicNo(e.target.value)}
            placeholder="Business License #"
            type="text"
            name="Business Lic. No"
            required
          />
        </div>

        <br></br>

        <ColorButton
          variant="contained"
          color="primary"
          style={{ margin: 20, borderRadius: 20 }}
          id="ctaBtns"
          onClick={onSubmit}
          className={classes.margin}
        >
          SCHEDULE DEMO
        </ColorButton>
        <h4
          style={{
            color: "whitesmoke",
            fontWeight: "300",
            fontSize: ".80rem",
          }}
        >
          Don't worry! We don't sell your information. See our Privacy Policy.
        </h4>
      </form>
    </div>
  );
}
