import { RouteModel } from "../models/route.model";
import { PointModel } from "../models/point.model";
import { getCoordinatesFromAddress, getDistanceFromCoordinates } from "../utils/googleApi.handlers";
import { Route } from "../interfaces/route.interface";

export const create = async (idPointA: string, idPointB: string) => {
    try {
      const pointA = await PointModel.findById(idPointA);
      const pointB = await PointModel.findById(idPointB);
  
      if (!pointA || !pointB) {
        return false;
      }
  
      const routeExist = await RouteModel.findOne({
        route: `from: ${pointA.location.name} | to: ${pointB.location.name}`,
      });
  
      if (!routeExist) {
        const route = await RouteModel.create({
          route: `from: ${pointA.location.name} | to: ${pointB.location.name}`,
        });
        return route;
      } else {
        return false;
      }
    } catch (error: unknown) {
        throw new Error((error as Error).message);
      }
};
  

export const getCoordinates = async(placeIdPointA: string, placeIdPointB: string) => {
    try {
        const pointA = await getPointByPlaceId(placeIdPointA);
        const pointB = await getPointByPlaceId(placeIdPointB);
        if(pointA && pointB) {
            const coordinatesA = await getCoordinatesFromAddress(pointA.location.name);
            const coordinatesB = await getCoordinatesFromAddress(pointB.location.name);
            return { pointA: coordinatesA, pointB: coordinatesB };
        } else return false;
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getDistance = async(origin: string, destination: string) => {
    try {
        const distance = await getDistanceFromCoordinates(origin, destination);
        if(distance) return distance;
        else return false;
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
}

export const getPointByPlaceId = async(placeId: string) => {
    try {
        const point = await PointModel.findOne({'location.placeId': placeId});
        return point;
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async() => {
    try {
        const routes = await RouteModel.find({});
        return routes;
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getById = async(id: string) => {
    try {
        const route = await RouteModel.findById(id);
        return route;
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const update = async(id: string, body: Route) => {
    try {
        const routeExist = await getById(id);
        if(routeExist){
            const routeUpdate = await RouteModel.updateOne(body);
            return routeUpdate;
        } else return false;    
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const remove = async(id: string) => {
    try {
        const routeExist = await getById(id);
        if(routeExist){
            const routeUpdate = await RouteModel.deleteOne({ _id: id });
            return routeUpdate;
        } else return false;    
    } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
