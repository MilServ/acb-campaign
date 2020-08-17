import React, { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

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

const bizType = [
  { key: 0, value: "Select Business Type" },
  { key: 1, value: "Retailer" },
  { key: 2, value: "Maker" },
  { key: 3, value: "Distributor" },
  { key: 4, value: "Importer" },
];

export default function SignUpForm(props) {
  const classes = useStyles();

  function validate(values) {
    const errors = {};
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
        signupRole: "",
        signupEmail: "",
        signupLicNo: "",
        signupBizName: "",
        signupBizSt: "",
        signupBizCity: "",
        signupLicState: "",
        signupBizZip: "",
        signupPhoneNo: "",
        signupLegalBizName: "",
        signupBizType: 0,
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ColorButton
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        variant="contained"
        color="primary"
        id="ctaBtns"
        className={classes.margin}
      >
        SIGN-UP
      </ColorButton>

      <Modal
        size="lg"
        variant="primary"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ maxHeight: "calc(100vh - 5px)", overflowY: "auto" }}
        show={show}
      >
        <Modal.Body>
          {" "}
          <div
            className="container"
            style={{ backgroundColor: "#68813c", padding: "50px" }}
          >
            <div className="row">
              <div className="col-md-1">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  onHide={handleClose}
                  closebutton
                  onClick={handleClose}
                  style={{ cursor: "pointer", color: "white" }}
                />
              </div>
            </div>
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
                    No Credit Card Needed. Always Free for Retailers. Limited
                    Free Trial for Craft Beverage Producers. We look forward to
                    working with you. Cheers!
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
                      placeholder="Your Business Role"
                      type="text"
                      name="signupRole"
                      required
                    />
                    {touched.signupRole && errors.signupRole ? (
                      <div className="validatorText">{errors.signupRole}</div>
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
                        maxLength="11"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="(Area Code) & Phone Number"
                        name="demoPhoneNo"
                      />
                      {touched.demoPhoneNo && errors.demoPhoneNo ? (
                        <div className="validatorText">
                          {errors.demoPhoneNo}
                        </div>
                      ) : null}
                      <small
                        style={{
                          fontWeight: "500",
                          fontSize: ".75rem",
                          color: "white",
                          margin: 5,
                        }}
                      >
                        Example: <em> 212 555 2678</em>
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
                <select
                  style={{
                    border: "solid #383838 .75px",
                    borderRadius: 5,
                    margin: 5,
                    height: 30,
                    width: "81%",
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="signupBizType"
                >
                  {bizType.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}{" "}
                    </option>
                  ))}
                </select>
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
                  placeholder="Legal Business Name (if applicable)"
                  type="text"
                  name="signupLegalBizName"
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
                To expedite processing, please take a picture of your NY SLA
                License and email it to sales@americancraftbrands.com.
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
                Don't worry! We don't sell your information. See our Privacy
                Policy.
              </h4>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
