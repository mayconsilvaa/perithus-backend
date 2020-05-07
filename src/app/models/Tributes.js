import { Schema, model } from 'mongoose';

const TributeSchema = new Schema(
  {
    year_reference: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    payment: {
      type: Boolean,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

export default model('Tribute', TributeSchema);
