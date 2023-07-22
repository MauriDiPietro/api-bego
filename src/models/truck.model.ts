import { Schema, model } from "mongoose";
import { Truck } from "../interfaces/truck.interface";

const truckSchema = new Schema<Truck>(
  {
    model: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    transportWeight: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TruckModel = model("trucks", truckSchema);
