import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }

  return handler(req, res);
};

const db = mongoose.connection;

db.once("open", () => console.log(`Connect to DB on: ${MONGO_URL}`));

export default connectDB;
