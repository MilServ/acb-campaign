import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//customStyles is props for Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    overflowY: "scroll",
    maxHeight: "calc(100vh - 5px)",
    color: "white",
    backgroundColor: "rgba(104,129,60,.85)",
    transform: "translate(-50%, -50%)",
  },
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    width: "155px",
    borderRadius: 20,
    fontSize: "0.90rem",
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#68813c"),
    backgroundColor: "#68813c",
    "&:hover": {
      backgroundColor: "#68813c",
    },
    margin: {
      margin: theme.spacing(2),
      width: "155px",
      borderRadius: 20,
      fontSize: "0.90rem",
    },
  },
}))(Button);

export default function SignUpForm(props) {
  const classes = useStyles();

  // Next three functions hadnle Modal open and close

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  // To validate input fields
  function validate(values) {
    const errors = {};
    values.signupPhoneNo = values.phoneA + values.phoneB + values.phoneC;
    if (!values.signupFirstN) {
      errors.signupFirstN = "Required field";
    }

    if (!values.signupLastN) {
      errors.signupLastN = "Required field";
    }

    if (!values.signupLicState) {
      errors.signupLicState = "Required field";
    }
    if (!values.signupBizName) {
      errors.signupBizName = "Required field";
    }
    if (!values.signupBizSt) {
      errors.signupBizSt = "Required field";
    }
    if (!values.signupBizCity) {
      errors.signupBizCity = "Required field";
    }
    if (!values.signupEmail) {
      errors.signupEmail = "Required field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signupEmail)
    ) {
      errors.signupEmail = "Invalid email address";
    }

    if (!values.phoneA) {
      errors.phoneA = "Required field";
    }
    if (!values.phoneB) {
      errors.phoneB = "Required field";
    }
    if (!values.phoneC) {
      errors.phoneC = "Required field";
    }

    if (!values.signupPhoneNo) {
      errors.signupPhoneNo = "Required field";
    }

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        signupLastN: "",
        signupFirstN: "",
        signupEmail: "",
        signupLicNo: "",
        signupBizName: "",
        signupBizSt: "",
        signupBizCity: "",
        signupLicState: "",
        signupBizZip: "",
        signupPhoneNo: "",
      },
      validate,
      onSubmit: (values) => {
        // console.log(JSON.stringify(values));

        Axios.post("api/signup/signup", values)
          .then((response) => {
            if (response.data.success) {
              alert(
                "Thank you, " +
                  values.signupBizName +
                  ". Your request for a signup has been submitted. An American Craft Brands Rep will contact you within 24 business hours for scheduling."
              );
              window.location.reload();
            }
          })

          .catch((error) => {
            if (error.response) {
              console.log("Line 100" + error.response.data); // => the response payload
              alert(
                "Sorry, " +
                  values.signupBizName +
                  ". Looks like we received a similar request already.  Please try a different email address"
              );
            }
          });
      },
    }
  );

  return (
    <>
      <ColorButton
        onClick={openModal}
        style={{ cursor: "pointer" }}
        variant="contained"
        color="primary"
        id="ctaBtns"
        className={classes.margin}
      >
        SIGN-UP
      </ColorButton>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={closeModal}
          style={{ cursor: "pointer" }}
        />

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
                  SIGN-UP
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
                No Credit Card Needed. Always Free for Retailers. Limited Free
                Trial for Craft Beverage Producers. We look forward to working
                with you. Cheers!
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
              <div className="col-md-6 col-sm-12 col-xs-12 pt-2">
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
                  name="signupFirstN"
                  required
                />
                {touched.signupFirstN && errors.signupFirstN ? (
                  <div className="validatorText">{errors.signupFirstN}</div>
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
                  name="signupLastN"
                  required
                />
                {touched.signupLastN && errors.signupLastN ? (
                  <div className="validatorText">{errors.signupLastN}</div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
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
                  name="signupEmail"
                  required
                />
                {touched.signupEmail && errors.signupEmail ? (
                  <div className="validatorText">{errors.signupEmail}</div>
                ) : null}
              </div>

              <div className="col-md-12" style={{ marginTop: 10 }}>
                <div className="col-md-2 mb-2">
                  <label
                    style={{
                      color: "whitesmoke",
                      fontWeight: "500",
                      fontSize: ".80rem",
                      marginBottom: 1,
                      display: "block",
                    }}
                  >
                    Business Phone Number{" "}
                  </label>
                  <div style={{ display: "inline" }}>
                    <input
                      style={{
                        border: "solid #383838 .75px",
                        borderRadius: 5,
                        marginLeft: 2,
                        height: 30,
                        marginTop: 8,
                        width: "8%",
                        paddingLeft: 2,
                        display: "inline",
                      }}
                      type="tel"
                      maxLength="3"
                      pattern="[0-9]{3}"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phoneA"
                    />
                    {touched.phoneA && errors.phoneA ? (
                      <div className="validatorText">{errors.phoneA}</div>
                    ) : null}
                    <input
                      style={{
                        border: "solid #383838 .75px",
                        borderRadius: 5,
                        marginLeft: 2,
                        height: 30,
                        marginTop: 8,
                        width: "8%",
                        display: "inline",
                      }}
                      type="tel"
                      maxLength="3"
                      pattern="[0-9]{3}"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phoneB"
                    />
                    {touched.phoneB && errors.phoneB ? (
                      <div className="validatorText">{errors.phoneB}</div>
                    ) : null}
                    <input
                      style={{
                        border: "solid #383838 .75px",
                        borderRadius: 5,
                        marginLeft: 2,
                        height: 30,
                        marginTop: 8,
                        width: "10%",
                        display: "inline",
                      }}
                      type="tel"
                      maxLength="4"
                      pattern="[0-9]{4}"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phoneC"
                    />
                    {touched.phoneC && errors.phoneC ? (
                      <div className="validatorText">{errors.phoneC}</div>
                    ) : null}
                  </div>
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
              placeholder="Business Name (Legal)"
              type="text"
              name="signupBizName"
              required
            />
            {touched.signupBizName && errors.signupBizName ? (
              <div className="validatorText">{errors.signupBizName}</div>
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
              name="signupBizSt"
              required
            />
            {touched.signupBizSt && errors.signupBizSt ? (
              <div className="validatorText">{errors.signupBizSt}</div>
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
              name="signupBizCity"
              required
            />
            {touched.signupBizCity && errors.signupBizCity ? (
              <div className="validatorText">{errors.signupBizCity}</div>
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
              name="signupLicState"
              required
            />
            {touched.signupLicState && errors.signupLicState ? (
              <div className="validatorText">{errors.signupLicState}</div>
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
              name="signupBizZip"
              maxLength="5"
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
              name="signupLicNo"
            />
          </div>
          <small
            htmlFor="licenseMessage"
            style={{ color: "white", display: "block" }}
          >
            To expedite processing, please take a picture of your NY SLA License
            and email it to sales@americancraftbrands.com.
          </small>

          <br></br>

          <ColorButton
            variant="contained"
            color="primary"
            id="ctaBtns"
            type="submit"
            style={{
              backgroundColor: "#bb6125",
              margin: 20,
              borderRadius: 20,
            }}
            // onClick={handleReset}
            className={classes.margin}
          >
            SUBMIT
          </ColorButton>
          <h4
            style={{
              color: "whitesmoke",
              fontWeight: "300",
              fontSize: ".80rem",
            }}
          >
            Don't worry! We don't sell your information. See our{" "}
            <a href="https://www.ninkatek.com/privacy-policy.html">
              Privacy Policy.
            </a>
          </h4>
        </form>
      </Modal>
    </>
  );
}
