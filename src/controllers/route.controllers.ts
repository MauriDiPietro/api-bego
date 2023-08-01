import { Request, Response } from 'express';
import * as services from '../services/route.services';
import { HttpResponse } from '../utils/http.response';
const httpResponse = new HttpResponse();

export const create = async (req: Request, res: Response) => {
    try {
        const { idPointA } = req.params;
        const { idPointB } = req.params;
        const route = await services.create(idPointA, idPointB);
        if(route) return httpResponse.Ok(res, route);
        else return httpResponse.NotFound(res, 'Error creating route');
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const getCoordinates = async(req: Request, res: Response) => {
    try {
        const { placeIdPointA } = req.params;
        const { placeIdPointB } = req.params;
        const coordinates = await services.getCoordinates(placeIdPointA, placeIdPointB);
        if(coordinates) return httpResponse.Ok(res, coordinates);
        else return httpResponse.NotFound(res, 'Error loading coordinates');
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const getDistance = async(req: Request, res:Response) => {
    try {
        const { placeIdPointA } = req.params;
        const { placeIdPointB } = req.params;
        const coordinates = await services.getCoordinates(placeIdPointA, placeIdPointB);
        if(coordinates) {
            const origin = `${coordinates.pointA.latitude}, ${coordinates.pointA.longitude}`;
            const destination = `${coordinates.pointB.latitude}, ${coordinates.pointB.longitude}`;
            const distance = await services.getDistance(origin, destination);
            return httpResponse.Ok(res, distance);
        }
        else return httpResponse.NotFound(res, 'Error loading distance');
    } catch (error) {
        console.log();
        return httpResponse.ServerError(res, error);
    }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const routes = await services.getAll();
        return httpResponse.Ok(res, routes); 
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const route = await services.getById(id);
        return httpResponse.Ok(res, route);
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updRoute = await services.update(id, req.body);
        if(updRoute) return httpResponse.Ok(res, updRoute);
        else return httpResponse.NotFound(res, 'Error updating route')
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const remove = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const delRoute = await services.remove(id);
        if(delRoute) return httpResponse.Ok(res, delRoute);
        else return httpResponse.NotFound(res, 'Error removing route')
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};