import { Document } from 'mongoose';

export interface Restaurant extends Document {
  name: string;
  email: string;
  password: string;
  availableDays: Array<number>;
  availableTables: number;
}
