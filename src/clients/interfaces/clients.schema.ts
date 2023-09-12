import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    celphone: { type: String },
    password: String,
  },
  { timestamps: true, collection: 'clients' },
);
