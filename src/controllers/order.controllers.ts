import { Request, Response } from 'express';
import * as services from '../services/order.services';
import { HttpResponse } from '../utils/http.response';
const httpResponse = new HttpResponse();

export const create = async(req: Request, res: Response) => {
    try {
        const { type, description, route, status, truck } = req.body;
        const order = { type, description, route, status, truck };
        const newOrder = await services.create(order);
        return httpResponse.Ok(res, newOrder);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const updateStatus = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updOrder = await services.updateStatus(id, status);
        return httpResponse.Ok(res, updOrder);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const update = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updOrder = await services.update(id, req.body);
        if(updOrder) return httpResponse.Ok(res, updOrder);
        else return httpResponse.NotFound(res, 'Error updating order')
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const remove = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const delOrder = await services.remove(id);
        if(delOrder) return httpResponse.Ok(res, delOrder);
        else return httpResponse.NotFound(res, 'Error removing order')
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const getById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const order = await services.getById(id);
        return httpResponse.Ok(res, order);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const getAll = async(req: Request, res: Response) => {
    try {
        const orders = await services.getAll();
        return httpResponse.Ok(res, orders);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};

export const addTruckToOrder = async(req: Request, res: Response) => {
    try {
        const { truckId } = req.params;
        const { orderId } = req.params;
        const order = await services.addTruckToOrder(truckId, orderId);
        if(!order) return httpResponse.NotFound(res, 'Error add truck to order')
        else return httpResponse.Ok(res, order);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
};