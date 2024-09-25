const News = require("../models/news");

exports.get = async (req, reply) => {
  try {
    const news = await News.find().sort({ dateTime: -1 });
    return news;
  } catch (error) {
    throw error;
  }
};

exports.search = async (req, reply) => {
  try {
    const news = await News.find({ name: { $regex: req.body.name } });
    return news;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (req, reply) => {
  try {
    const newsId = req.params.id;
    const news = await News.findById(newsId);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.add = async (req, reply) => {
  try {
    const data = new News(req.body);
    return data.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (req, reply) => {
  try {
    const newsId = req.params.id;
    const data = req.body;
    const update = await News.findByIdAndUpdate(newsId, data, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (req, reply) => {
  try {
    const newsId = req.params.id;
    const data = News.findByIdAndDelete(newsId);
    return data;
  } catch (error) {
    throw error;
  }
};
