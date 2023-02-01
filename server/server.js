import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
app.use(cors);

const PORT = 4000;

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://bitfumes:bitfumes123@bitfumes-mern.1cye32g.mongodb.net/?retryWrites=true&w=majority")
        .then(() => console.log("Connected"))
        .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});