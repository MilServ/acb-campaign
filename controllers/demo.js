const Demo = require("../models/demo");

// Initial Routes for creating Veteran Applicant accounts. Will add read, remove, and update routes
// at a later date

exports.create = (req, res) => {
  const demo = new Demo(req.body);
  console.log(req.body);

  demo.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};
