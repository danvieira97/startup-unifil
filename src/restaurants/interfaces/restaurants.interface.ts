import { Document } from 'mongoose';

export interface Restaurant extends Document {
  name: string;
  availableDays: Array<number>;
  availableTables: number;
}
