const Quatation = require("../models/quatation");

exports.get = async (req, reply) => {
  try {
    const quatations = await Quatation.find().sort({ dateTime: -1 });
    return quatations;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const quatations = await Quatation.find(req.body);
    return quatations;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const Id = req.params.id;
    const quatation = await Quatation.findById(Id);
    return quatation;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const quatation = new Quatation(req.body);
    return quatation.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const Id = req.params.id;
    const quatation = req.body;
    const update = await Quatation.findByIdAndUpdate(Id, quatation, {
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
    const quatation = Quatation.findByIdAndDelete(Id);
    return quatation;
  } catch (error) {
    throw error;
  }
};
