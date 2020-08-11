const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function isEmptyValidator(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.demoLastN = !isEmpty(data.demoLastN) ? data.demoLastN : "";
  data.demoFirstN = !isEmpty(data.demoFirstN) ? data.demoFirstN : "";
  data.demoEmail = !isEmpty(data.demoEmail) ? data.demoEmail : "";
  data.demoPhoneNo = !isEmpty(data.demoPhoneNo) ? data.demoPhoneNo : "";

  data.demoStateLicNo = !isEmpty(data.demoStateLicNo)
    ? data.demoStateLicNo
    : "";
  data.demoBizName = !isEmpty(data.demoBizName) ? data.demoBizName : "";
  data.demoBizStreet = !isEmpty(data.demoBizStreet) ? data.demoBizStreet : "";
  data.demoBizCity = !isEmpty(data.demoBizCity) ? data.demoBizCity : "";
  data.demoBizState = !isEmpty(data.demoBizState) ? data.demoBizState : "";

  // Checking for any empty (required) fields
  if (Validator.isEmpty(data.demoFirstN)) {
    errors.demoFirstN = "First name required";
  }
  if (Validator.isEmpty(data.demoLastN)) {
    errors.demoLastN = "Last name required";
  }

  if (Validator.isEmpty(data.demoEmail)) {
    errors.demoEmail = "Email field is required";
  }

  if (Validator.isEmpty(data.demoPhoneNo)) {
    errors.demoPhoneNo = "Phone number required";
  }
  if (Validator.isEmpty(data.demoStateLicNo)) {
    errors.demoStateLicNo = "NY SLA Lic Number required";
  }
  if (!Validator.isEmpty(data.demoBizName)) {
    errors.demoBizName = "Business name required";
  }
  if (!Validator.isEmpty(data.demoBizCity)) {
    errors.demoBizCity = "City required";
  }
  if (!Validator.isEmpty(data.demoBizStreet)) {
    errors.demoBizStreet = "Street address required";
  }
  if (!Validator.isEmpty(data.demoBizState)) {
    errors.demoBizState = "State address required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
