const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const url = process.env.MONGO_URL;
  // console.log(url);
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected:${conn?.connection?.host}`);
    // console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
