export interface Order {
    type: string;
    description: string;
    route: string;
    status: string;
    truck: string[];
};

export interface OrderDocument extends Order, Document {
    save(): Promise<OrderDocument>;
}
  