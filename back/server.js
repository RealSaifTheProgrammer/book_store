import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/leads", leadRoutes);

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
