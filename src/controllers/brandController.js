const Brand = require("../models/brand");

exports.get = async (req, reply) => {
  try {
    const brands = await Brand.find().sort({ dateTime: -1 });
    return brands;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const brands = await Brand.find(req.body);
    return brands;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const Id = req.params.id;
    const brand = await Brand.findById(Id);
    return brand;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const brand = new Brand(req.body);
    return brand.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const Id = req.params.id;
    const brand = req.body;
    const update = await Brand.findByIdAndUpdate(Id, brand, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (req, reply) => {
  try {
    const Id = req.params.id;
    const brand = Brand.findByIdAndDelete(Id);
    return brand;
  } catch (error) {
    throw error;
  }
};
