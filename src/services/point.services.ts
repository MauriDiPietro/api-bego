import { Point } from "../interfaces/point.interface";
import { PointModel } from "../models/point.model";

export const getAll = async(): Promise<Point[] | undefined> => {
    try {
        const points = await PointModel.find({});
        return points;
    } catch (error) {
        console.log(error);
    }
};