import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
const handleResponseError = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).send({message: "Sending incorrect data."})
  } else { 
    res.status(500).send({message: "Internal server error."})
  }
}

export default handleResponseError;