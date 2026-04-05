import express from "express";
import cors from "cors";
import connectDB from "../back/config/db.js";
import leadRoutes from "../back/routes/leadRoutes.js";
import bookRoutes from "../back/routes/bookRoute.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// مهم: assets مش هتشتغل بنفس الطريقة
// app.use("/assets", express.static("assets"));

// connect DB (smart)
let isConnected = false;

const connect = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

// routes
app.use(async (req, res, next) => {
  await connect();
  next();
});

app.use("/api/leads", leadRoutes);
app.use("/book", bookRoutes);

// export instead of listen
export default app;
