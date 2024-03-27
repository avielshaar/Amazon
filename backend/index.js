import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRouter.js";
import productsRouter from "./routes/productsRouter.js";
import usersRouter from "./routes/usersRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const connectionString = process.env.MONGO_CONNECTION_STRING;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use("/api/v1/seed", seedRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

export default app;