import mongoose, { mongo } from 'mongoose';

async function getMongodbConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/store_d");
  return mongoose.connection;
}

export default getMongodbConnection;
