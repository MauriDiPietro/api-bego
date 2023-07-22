import { Schema, model } from "mongoose";
import { Order } from "../interfaces/order.interface";

const orderSchema = new Schema<Order>(
  {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["planning", "in progress", "complete"],
      required: true,
    },
    truck: [
      {
        type: Schema.Types.ObjectId,
        ref: "trucks",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const OrderModel = model("orders", orderSchema);
