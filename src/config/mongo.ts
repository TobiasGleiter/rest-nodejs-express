import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI as string);
  } catch (error) {
    throw new Error();
  }
};

export default mongoose;
