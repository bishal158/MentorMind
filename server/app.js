const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const app = express();
dotenv.config();

// port number
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
// database connection
const connectDb = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
connectDb().then((r) => console.log("Connected to Database"));

app.use(cookieParser());
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use(express.json());
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.listen(PORT);
