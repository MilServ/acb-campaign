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

export default function BuyNowForm(props) {
  const classes = useStyles();
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

  function validate(values) {
    const errors = {};
    values.buyerPhoneNo = values.phoneA + values.phoneB + values.phoneC;
    if (!values.buyerFirstN) {
      errors.buyerFirstN = "Required field";
    }

    if (!values.buyerLastN) {
      errors.buyerLastN = "Required field";
    }

    if (!values.buyerLicState) {
      errors.buyerLicState = "Required field";
    }
    if (!values.buyerBizName) {
      errors.buyerBizName = "Required field";
    }
    if (!values.buyerBizSt) {
      errors.buyerBizSt = "Required field";
    }
    if (!values.buyerBizCity) {
      errors.buyerBizCity = "Required field";
    }
    if (!values.buyerEmail) {
      errors.buyerEmail = "Required field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.buyerEmail)
    ) {
      errors.buyerEmail = "Invalid email address";
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

    if (!values.buyerPhoneNo) {
      errors.buyerPhoneNo = "Required field";
    }
    if (!values.buyerLicNo) {
      errors.buyerLicNo = "Required field";
    }

    return errors;
  }

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        buyerLastN: "",
        buyerFirstN: "",
        buyerEmail: "",
        buyerLicNo: "",
        buyerBizName: "",
        buyerBizSt: "",
        buyerBizCity: "",
        buyerLicState: "",
        buyerBizZip: "",
        buyerPhoneNo: "",
      },
      validate,
      onSubmit: (values) => {
        // console.log(JSON.stringify(values));

        Axios.post("api/buyer/buyer", values)
          .then((response) => {
            if (response.data.success) {
              alert(
                "Thank you, " +
                  values.buyerBizName +
                  ". Your request has been submitted. An American Craft Brands Rep will contact you within 24 business hours for scheduling."
              );
              window.location.reload();
            }
          })

          .catch((error) => {
            if (error.response) {
              console.log("Line 100" + error.response.data); // => the response payload
              alert(
                "Sorry, " +
                  values.buyerBizName +
                  ". Looks like something went wrong.  Please try a different email address"
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
        BUY NOW
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
                  BUY NOW
                </b>
              </h2>
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
                  name="buyerFirstN"
                  required
                />
                {touched.buyerFirstN && errors.buyerFirstN ? (
                  <div className="validatorText">{errors.buyerFirstN}</div>
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
                  name="buyerLastN"
                  required
                />
                {touched.buyerLastN && errors.buyerLastN ? (
                  <div className="validatorText">{errors.buyerLastN}</div>
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
                  name="buyerEmail"
                  required
                />
                {touched.buyerEmail && errors.buyerEmail ? (
                  <div className="validatorText">{errors.buyerEmail}</div>
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
              name="buyerBizName"
              required
            />
            {touched.buyerBizName && errors.buyerBizName ? (
              <div className="validatorText">{errors.buyerBizName}</div>
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
              name="buyerBizSt"
              required
            />
            {touched.buyerBizSt && errors.buyerBizSt ? (
              <div className="validatorText">{errors.buyerBizSt}</div>
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
              name="buyerBizCity"
              required
            />
            {touched.buyerBizCity && errors.buyerBizCity ? (
              <div className="validatorText">{errors.buyerBizCity}</div>
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
              name="buyerLicState"
              required
            />
            {touched.buyerLicState && errors.buyerLicState ? (
              <div className="validatorText">{errors.buyerLicState}</div>
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
              name="buyerBizZip"
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
              name="buyerLicNo"
              required
            />
            {touched.buyerLicNo && errors.buyerLicNo ? (
              <div className="validatorText">{errors.buyerLicNo}</div>
            ) : null}
            <br />
            <small style={{ color: "white" }}>
              To expedite processing, please take a picture of your NY SLA
              License and email it to <b>sales@americancraftbrands.com</b>.
            </small>
          </div>

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
