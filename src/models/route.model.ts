import { Schema, model } from "mongoose";
import { Route } from "../interfaces/route.interface";

const routeSchema = new Schema<Route>(
  {
    route: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RouteModel = model("routes", routeSchema);