const Favorites = require("../models/favorite");

exports.get = async (req, reply) => {
  try {
    const favorite = await Favorites.find().sort({ dateTime: -1 });
    return favorite;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const favorite = await Favorites.find(req.body);
    return favorite;
  } catch (error) {
    throw error;
  }
};

exports.getSize = async (req, reply) => {
  try {
    const favorite = await Favorites.find(req.body);
    return favorite.length;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const Id = req.params.id;
    const favorite = await Favorites.findById(Id);
    return favorite;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const data = new Favorites(req.body);
    return data.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const Id = req.params.id;
    const data = req.body;
    const update = await Favorites.findByIdAndUpdate(Id, data, {
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
    const data = Favorites.findByIdAndDelete(Id);
    return data;
  } catch (error) {
    throw error;
  }
};
