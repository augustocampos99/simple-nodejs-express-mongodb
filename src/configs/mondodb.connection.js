import mongoose, { mongo } from 'mongoose';

async function getMongodbConnection() {
  await mongoose.connect(process.env.MONGODB_CONNECTION);
  return mongoose.connection;
}

export default getMongodbConnection;
