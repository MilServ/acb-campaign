const Buyers = require("../models/buyers");

// Initial Routes for creating Veteran Applicant accounts. Will add read, remove, and update routes
// at a later date

exports.create = (req, res) => {
  const buyers = new Buyers(req.body);
  console.log(req.body);

  buyers.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};
