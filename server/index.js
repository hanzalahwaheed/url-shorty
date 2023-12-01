import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb+srv://dbHanzalah:abdul786@cluster0.h1teodo.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000, () => console.log(`Connected at Port 5000`));
    }).catch((error) => {
        console.log(`${error} at connection`);
    });
