import { Document } from 'mongoose';

export interface Client extends Document {
  name: string;
  celphone: string;
  readonly email: string;
  password: string;
}
