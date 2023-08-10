import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

connectDB();

//es module to fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/build")));
//routes
app.use("/", router);

//static field
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
