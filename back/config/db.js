import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB Connected");
};

export default connectDB;
