import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Global connection cache for Next.js serverless API routes on Vercel.
 * Prevents opening duplicate database connections on every form submission.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local or Vercel Settings"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "portfolio_db", // Creates/uses a database named "portfolio_db" in MongoDB Atlas
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/**
 * Mongoose Schema for Contact Form Messages
 * Saved inside the "messages" collection in MongoDB Atlas
 */
const MessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // Automatically saves createdAt and updatedAt dates
  }
);

export const Message =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);