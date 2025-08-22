import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection error ❌", error);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;
