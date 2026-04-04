import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import bookRoutes from "./routes/bookRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/assets", express.static("assets"));

// connect DB
connectDB();

// routes
app.use("/api/leads", leadRoutes);
app.use("/book", bookRoutes);

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
