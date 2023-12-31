import { Schema, model } from "mongoose";
import { Order, OrderDocument } from "../interfaces/order.interface";

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
    route: [
      {
      type: Schema.Types.ObjectId,
      ref: "routes",
      default: []
      }
    ],
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

export const OrderModel = model<OrderDocument>("orders", orderSchema);
