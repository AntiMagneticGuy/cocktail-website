const mongoose = require("mongoose");

const {MONGO_URI} = process.env;
    mongoose.set('strictQuery', false);
exports.connection = () => {
    mongoose.connect(MONGO_URI,{
      useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};












