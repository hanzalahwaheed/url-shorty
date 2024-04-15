import express from "express";
import mongoose from "mongoose";
import urlRoutes from "./routes/url.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api", urlRoutes);

// mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Connected at Port ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} at connection`);
  });
