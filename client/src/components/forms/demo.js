import React from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

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

  function validate(values) {
    const errors = {};
    if (!values.demoFirstN) {
      errors.demoFirstN = "Required field";
    }

    if (!values.demoLastN) {
      errors.demoLastN = "Required field";
    }

    if (!values.demoBizState) {
      errors.demoBizState = "Required field";
    }
    if (!values.demoBizName) {
      errors.demoBizName = "Required field";
    }
    if (!values.demoBizStreet) {
      errors.demoBizStreet = "Required field";
    }
    if (!values.demoBizCity) {
      errors.demoBizCity = "Required field";
    }
    if (!values.demoEmail) {
      errors.demoEmail = "Required field";
    }
    if (!values.demoPhoneNo) {
      errors.demoPhoneNo = "Required field";
    }

    return errors;
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, // use this if you want controlled components
    errors,
  } = useFormik({
    initialValues: {
      demoLastN: "",
      demoFirstN: "",
      demoEmail: "",
      demoStateLicNo: "",
      demoBizName: "",
      demoBizStreet: "",
      demoBizCity: "",
      demoBizState: "",
      demoBizZip: "",
      demoPhoneNo: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}

      Axios.post("api/demo/demo", values)
        .then((response) => {
          if (response.data.success) {
            alert(
              "Thank you, " +
                values.demoBizName +
                ". Your request for a demo has been successfully submitted. An American Craft Brands Rep will contact you within 24 business hours to schedule a demo."
            );
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Line 100" + error.response.data); // => the response payload
            alert(
              "Sorry, " +
                values.demoBizName +
                ". Looks like we received a similar request already.  Please try a different email address"
            );
          }
        });
    },
  });

  return (
    <div
      className="container"
      style={{ backgroundColor: "rgba(0,0,0,0.75", padding: "50px" }}
    >
      <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First name"
                type="text"
                name="demoFirstN"
                required
              />
              {touched.demoFirstN && errors.demoFirstN ? (
                <div className="validatorText">{errors.demoFirstN}</div>
              ) : null}

              <input
                style={{
                  border: "solid #383838 .75px",
                  borderRadius: 5,
                  height: 30,
                  width: "40%",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last name"
                type="text"
                name="demoLastN"
                required
              />
              {touched.demoLastN && errors.demoLastN ? (
                <div className="validatorText">{errors.demoLastN}</div>
              ) : null}
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
                  width: "50%",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email address"
                type="email"
                name="demoEmail"
                required
              />
              {touched.demoEmail && errors.demoEmail ? (
                <div className="validatorText">{errors.demoEmail}</div>
              ) : null}
            </div>
            <div className="col-md-12">
              <div className="col-md-2 mb-2">
                <input
                  style={{
                    border: "solid #383838 .75px",
                    borderRadius: 5,
                    marginLeft: 2,
                    height: 30,
                    marginTop: 8,
                    width: "50%",
                  }}
                  type="tel"
                  id="phone"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                  type="text"
                  name="demoPhoneNo"
                />
                {touched.demoPhoneNo && errors.demoPhoneNo ? (
                  <div className="validatorText">{errors.demoPhoneNo}</div>
                ) : null}
                <small
                  style={{
                    fontWeight: "500",
                    fontSize: ".75rem",
                    color: "white",
                    margin: 5,
                  }}
                >
                  Format: "212-555-2678"{" "}
                </small>
              </div>
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
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Business Name"
            type="text"
            name="demoBizName"
            required
          />
          {touched.demoBizName && errors.demoBizName ? (
            <div className="validatorText">{errors.demoBizName}</div>
          ) : null}
          <br></br>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "81%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Street Address"
            type="text"
            name="demoBizStreet"
            required
          />
          {touched.demoBizStreet && errors.demoBizStreet ? (
            <div className="validatorText">{errors.demoBizStreet}</div>
          ) : null}
        </div>
        <div>
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "40.5%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="City"
            type="text"
            name="demoBizCity"
            required
          />
          {touched.demoBizCity && errors.demoBizCity ? (
            <div className="validatorText">{errors.demoBizCity}</div>
          ) : null}
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "10%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="State"
            type="text"
            name="demoBizState"
            required
          />
          {touched.demoBizState && errors.demoBizState ? (
            <div className="validatorText">{errors.demoBizState}</div>
          ) : null}
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "23%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Zip Code"
            type="text"
            name="demoBizZip"
            // required
          />
          <input
            style={{
              border: "solid #383838 .75px",
              borderRadius: 5,
              margin: 5,
              height: 30,
              width: "50%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="NY SLA License Number"
            type="text"
            name="demoStateLicNo"
          />
        </div>

        <br></br>

        <ColorButton
          variant="contained"
          color="primary"
          style={{ margin: 20, borderRadius: 20 }}
          id="ctaBtns"
          type="submit"
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
