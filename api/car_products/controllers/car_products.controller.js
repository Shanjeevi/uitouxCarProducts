const carProductsModel = require("../models/car_products.model");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");


exports.create = async (req, res) => {
  let filePath = "";
  if (req.file) {
    filePath = req.file.path;
  }
  const data = new carProductsModel({
    name: req.body.name,
    sku: req.body.sku,
    rating: req.body.rating,
    price: req.body.price,
    isDeleted: false,
    image: filePath,
    created_at: new Date()
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

  
exports.list = async (req, res) => {
  try {
    const allData = await carProductsModel.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ message: "Error listing data", error: error.message });
  }
};


exports.view = async (req, res) => {
  const { id } = req.params;

  try {
    const singleData = await carProductsModel.findById(id);
    if (!singleData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(singleData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
};




