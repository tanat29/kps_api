const SubCategory = require("../models/sub_category");

exports.get = async (req, reply) => {
  try {
    const subCategorys = await SubCategory.find().sort({ dateTime: -1 });
    return subCategorys;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const subCategorys = await SubCategory.find(req.body);
    return subCategorys;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const categoryId = req.params.id;
    const category = await SubCategory.findById(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const category = new SubCategory(req.body);
    return category.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const categoryId = req.params.id;
    const category = req.body;
    const update = await SubCategory.findByIdAndUpdate(categoryId, category, {
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
    const category = SubCategory.findByIdAndDelete(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};
