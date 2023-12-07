const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const expenseRoutes = require("./routes/expense");

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB connection error: ${err}`);
  });
