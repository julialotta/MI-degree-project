import "dotenv/config";
import mongoose from "mongoose";

const DB: string = process.env.DATABASE_URL || "";

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("Server running");
  })
  .catch((err) => {
    console.log(err);
  });
