import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

// In case no database connection, we can set it to an empty object
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.coon;

  if (!DB_URI) throw new Error("MONGODB_URI is missing.");

  cached.promise =
    cached.promise ||
    mongoose
      .connect(DB_URI, {
        dbName: "job_board",
        bufferCommands: false,
      })
      .then(() => console.log("INFO: MongoDB connected"))
      .catch((err) => console.error("ERROR: MongoDB connection failed", err));

  cached.conn = await cached.promise;

  return cached.conn;
};
