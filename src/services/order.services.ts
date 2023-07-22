import { Order, OrderDocument } from "../interfaces/order.interface";
import { OrderModel } from "../models/order.model";
import { RouteModel } from "../models/route.model";
import { getTruckById } from "./truck.services";

export const create = async(order: Order): Promise<Order | undefined> => {
    try {
        const route = await RouteModel.findById(order.route);
        if(route !== null){
            const newOrder = await OrderModel.create(order);
            return newOrder;
        } else return false;
    } catch (error) {
        console.log(error);
    }
};

export const updateStatus = async(id: string, status: string): Promise<Order | undefined | null> => {
    try {
        const order = await OrderModel.findByIdAndUpdate(
            id,
            { status: status },
            { new: true }
        );
        return order;
    } catch (error) {
        console.log(error);
    }
};

export const update = async(id: string, body: Order) => {
    try {
        const orderExist = await OrderModel.findById(id);
        if(orderExist && orderExist.status !== 'in progress'){
            const orderUpdate = await OrderModel.updateOne(body);
            return orderUpdate;
        } else return false;
    } catch (error) {
        console.log(error);
    }
};

export const remove = async(id: string) => {
    try {
        const orderExist = await getById(id);
        if(orderExist && orderExist.status !== 'in progress'){
            const orderRemove = await OrderModel.deleteOne({ _id: id });
            return orderRemove;
        } return false;
    } catch (error) {
        console.log(error);
    }
};

export const getById = async(id: string): Promise<OrderDocument | null | undefined> => {
    try {
        const order = await OrderModel.findById(id).populate(['truck', 'route']);
        return order;
    } catch (error) {
        console.log(error);
    }
};

export const getAll = async(): Promise<Order[] | undefined> => {
    try {
        const orders = await OrderModel.find({}).populate(['truck', 'route']);
        return orders;
    } catch (error) {
        console.log(error);
    }
};

export const addTruckToOrder = async (truckId: string, orderId: string): Promise<Order | boolean | undefined> => {
    try {
        const truck = await getTruckById(truckId);
        if(truck){
            const order = await getById(orderId);
            if(order){
                await updateStatus(orderId, 'in progress');
                order.truck.push(truckId);
                order.save();
                return order;
            } else return false;
        } else return false;
    } catch (error) {
        console.log(error);
    }
};