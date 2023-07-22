import { Schema, model } from "mongoose";
import { Point } from "../interfaces/point.interface";

const pointSchema = new Schema<Point>(
  {
    location: {
        name: {
          type: String,
          required: true,
        },
        placeId: {
          type: String,
          required: true,
        }
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PointModel = model("points", pointSchema);
