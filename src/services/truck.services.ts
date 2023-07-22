import { Truck } from "../interfaces/truck.interface";
import { TruckModel } from "../models/truck.model";

export const getTruckById = async(id: string) => {
    try {
        const truck = await TruckModel.findById(id);
        return truck;
    } catch (error) {
        console.log(error);
    }
};

