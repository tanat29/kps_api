const Category = require("../models/Category");

exports.get = async (req, reply) => {
  try {
    const categorys = await Category.find().sort({ dateTime: -1 });
    return categorys;
  } catch (error) {
    throw error;
  }
};

exports.getLimit = async (req, reply) => {
  try {
    const categorys = await Category.find()
      .sort({ dateTime: -1 })
      .limit(req.body.limit);

    return categorys;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const categorys = await Category.find({ name: { $regex: req.body.name } });
    return categorys;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const category = new Category(req.body);
    return category.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const categoryId = req.params.id;
    const category = req.body;
    const update = await Category.findByIdAndUpdate(categoryId, category, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (req, reply) => {
  try {
    const categoryId = req.params.id;
    const category = Category.findByIdAndDelete(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};
