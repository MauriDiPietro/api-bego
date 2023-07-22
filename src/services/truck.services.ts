import { Truck } from "../interfaces/truck.interface";
import { TruckModel } from "../models/truck.model";

export const getTruckById = async(id: string): Promise<Truck | null | undefined> => {
    try {
        const truck = await TruckModel.findById(id);
        return truck;
    } catch (error) {
        console.log(error);
    }
};

export const getAll = async(): Promise<Truck[] | undefined> => {
    try {
        const trucks = await TruckModel.find({});
        return trucks;
    } catch (error) {
        console.log(error);
    }
};
