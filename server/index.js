const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const Enquiry = require("./models/Enquiry");
const Admin = require("./models/Admin");
const adminRoutes = require("./routes/adminRoutes");
const adminEnquiryRoutes = require("./routes/adminEnquiryRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------ CORS ------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://construction-website-rouge-five.vercel.app" // 👈 ADD THIS
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(express.json());

// ------------------ MongoDB ------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ------------------ Nodemailer (FIXED) ------------------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // ✅ IMPORTANT
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER, // Gmail
    pass: process.env.EMAIL_PASS, // App Password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP
transporter.verify((err) => {
  if (err) {
    console.error("❌ SMTP ERROR:", err.message);
  } else {
    console.log("✅ SMTP READY (Gmail connected)");
  }
});

// ------------------ Test Route ------------------
app.get("/", (req, res) => {
  res.send("Mangilal backend running with Gmail SMTP ✅");
});

// ------------------ Enquiry API ------------------
app.post("/api/enquiry", async (req, res) => {
  console.log(
    "📩 Email attempt:",
    process.env.EMAIL_USER,
    process.env.TO_EMAIL
  );

  try {
    const { name, phone, email, serviceType, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, phone & message are required.",
      });
    }

    // Save enquiry in DB
    const enquiry = await Enquiry.create({
      name,
      phone,
      email,
      serviceType,
      message,
    });

    // Email content
    const mailOptions = {
      from: `"Mangilal Website" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Enquiry from ${name}`,
      text: `
New enquiry received from Mangilal Website:

Name: ${name}
Phone: ${phone}
Email: ${email || "-"}
Service Type: ${serviceType || "-"}
Message:
${message}

Time: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Thank you! Your enquiry has been received.",
      data: enquiry,
    });
  } catch (error) {
    console.error("❌ Enquiry Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// ------------------ Admin Routes ------------------
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminEnquiryRoutes);

// ------------------ Create Admin (One Time) ------------------
app.get("/create-admin", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash("Admin@2025", 10);

    await Admin.create({
      email: "admin@gmail.com",
      password: hashedPass,
    });

    res.send("Admin Created Successfully ✔");
  } catch (err) {
    res.send("Admin already exists");
  }
});

// ------------------ Start Server ------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
