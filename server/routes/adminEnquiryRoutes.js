const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const auth = require("../middleware/auth");

// GET all enquiries
router.get("/enquiries", auth, async (req, res) => {
  const data = await Enquiry.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
});

// DELETE enquiry
router.delete("/enquiry/:id", auth, async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
