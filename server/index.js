import express from "express";
import mongoose from "mongoose";
import urlRoutes from "./routes/url.js";

const app = express();
app.use(express.json());

// routes
app.use("/api", urlRoutes);

mongoose
  .connect(
    "mongodb+srv://dbHanzalah:abdul786@cluster0.h1teodo.mongodb.net/url-shorty?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => console.log(`Connected at Port 5000`));
  })
  .catch((error) => {
    console.log(`${error} at connection`);
  });
