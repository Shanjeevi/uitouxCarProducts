
const currencySeeder = require("./currency.seeder");

const mongoose = require("mongoose");
var env = "development";
const config = require("../dbconfig")[env];

mongoose.set("strictQuery", true);
mongoose.connect(
  `mongodb://${config.database.host}:${config.database.port}/${config.database.db}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log("Database Connection Error", err.message);
    } else {

    }
  }
);

const initiateSeeding = async () => {
  await currencySeeder.currencySeeder();
  console.log("seeding completed successfully");
};

initiateSeeding();
