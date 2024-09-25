const Product = require("../models/product_new");

exports.get = async (req, reply) => {
  try {
    const products = await Product.find().sort({ dateTime: -1 }).limit(10);
    return products;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const products = await Product.find(req.body).sort({ dateTime: -1 });
    return products;
  } catch (error) {
    throw error;
  }
};

exports.searchName = async (req, reply) => {
  try {
    const products = await Product.find({
      name: { $regex: req.body.name },
    }).sort({ dateTime: -1 }); //
    return products;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const product = new Product(req.body);
    return product.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const productId = req.params.id;
    const product = req.body;
    const update = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (req, reply) => {
  try {
    const productId = req.params.id;
    const product = Product.findByIdAndDelete(productId);
    return product;
  } catch (error) {
    throw error;
  }
};
