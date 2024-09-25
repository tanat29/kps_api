const User = require("../models/user");

exports.get = async (req, reply) => {
  try {
    const user = await User.find().sort({ dateTime: -1 });
    return user;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const user = await User.find(req.body);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const Id = req.params.id;
    const user = await User.findById(Id);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const user = new User(req.body);
    return user.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const Id = req.params.id;
    const user = req.body;
    const update = await User.findByIdAndUpdate(Id, user, {
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
    const user = User.findByIdAndDelete(Id);
    return user;
  } catch (error) {
    throw error;
  }
};
