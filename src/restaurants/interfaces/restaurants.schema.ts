import * as mongoose from 'mongoose';

export const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    availableDays: Array,
    availableTables: Number,
  },
  { timestamps: true, collection: 'restaurants' },
);
