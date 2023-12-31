import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
