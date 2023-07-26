const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
var bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express()
dotenv.config()

const port = process.env.PORT || 8080

const connectToDatabase = async ()=> {
    try {
      await mongoose.connect('mongodb://localhost:27017/uitouxVechicle', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Database connected successfully");
    } catch (err) {
      console.log(err);
    }
  }
  
connectToDatabase();

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, ()=>{
    console.log(`Port ${port} is running live`);
})



const car_products = require("./api/car_products/routes/car_products.route");
app.use("/car_products", car_products);