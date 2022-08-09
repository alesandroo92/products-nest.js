import { Document } from "mongoose";

export interface IProduct extends Document {
    
    id: string;
    product: string;
    description: string;
    price: number;
    createdAt?: Date;
}
