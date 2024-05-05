// db.js

const mongoose = require("mongoose");
const db =
  "mongodb://127.0.0.1:27017/FLAMES_HOUSE_INTERNATIONAL";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    console.log("MongoDB is not Connected...");
    process.exit(1);
  }
};
module.exports = connectDB;