import { PointModel } from "../models/point.model";

export const getAll = async() => {
    try {
        const points = await PointModel.find({});
        return points;
    } catch (error) {
        console.log(error);
    }
};