import mongoose from "mongoose";
import { IImage } from "./IImage";

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Image: { data: Buffer, contentType: String },
});

export const ImageModel = mongoose.model<IImage>("Images", ImageSchema);
