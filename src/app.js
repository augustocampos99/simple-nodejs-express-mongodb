import 'dotenv/config';
import express from 'express';
import getMongodbConnection from './configs/mondodb.connection.js';
import router from './routes/router.js';

const connection = await getMongodbConnection();

// If error
connection.on("error", (error) => {
  console.error("Error connection", error);
});

// If success
connection.once("open", () => {
  console.log("Connected!");
});

const app = express();

/** Middlewares */
app.use(express.json());
app.use(router);


/** Run server */
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
});
