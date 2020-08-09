const express = require("express");
const router = express.Router();
const Demo = require("../models/demo");

router.post("/demo", (req, res) => {
  const demo = new Demo(req.body);
  console.log(req.body);

  demo.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// Commenting out all code that will be used for Version 2

// const {
//   create
// //   list
// //   lastList,
//   // read,
//   // remove,
//   // update,
// } = require("../controllers/demo");
// const { requireSignin, adminMiddleware } = require("../controllers/auth");

// This route is for leads signing up for demos
// router.post("/demo", create);

// This route gets and displays list of Veteran applicants.
// Only Admins can see this Veterans list
// router.get("/demos", list, requireSignin, adminMiddleware);
// router.get(
//   "/veterans-last-submission",
//   lastList,
//   requireSignin,
//   adminMiddleware
// );

// This route selects individual Veteran file
// router.get("/veteran_file", read);

// router.delete("/veteran_file", requireSignin, adminMiddleware, remove);
// router.put("/veteran_file", requireSignin, adminMiddleware, update);

module.exports = router;
