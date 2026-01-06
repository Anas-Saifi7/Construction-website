const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashed = await bcrypt.hash("Admin@2025", 10);

    await Admin.create({
      email: "admin@gmail.com",
      password: hashed,
    });

    console.log("✅ Admin Created Successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit();
  }
})();
