const productController = require("../controllers/productController");
const productNewController = require("../controllers/productNewController");
const categoryController = require("../controllers/categoryController");
const subCategoryController = require("../controllers/subCategoryController");
const newsController = require("../controllers/newsController");
const brandController = require("../controllers/brandController");
const userController = require("../controllers/userController");

const routes = [
  {
    method: "GET",
    url: "/",
    handler: productController.get,
  },
  {
    method: "GET",
    url: "/product",
    handler: productController.get,
  },
  // {
  //   method: "POST",
  //   url: "/productNew",
  //   handler: productNewController.get,
  // },
  {
    method: "POST",
    url: "/product",
    handler: productController.search,
  },
  {
    method: "POST",
    url: "/productLimit",
    handler: productController.getLimit,
  },
  {
    method: "GET",
    url: "/product/:id",
    handler: productController.getById,
  },
  {
    method: "POST",
    url: "/productAdd",
    handler: productController.add,
  },
  {
    method: "PUT",
    url: "/product/:id",
    handler: productController.update,
  },

  {
    method: "DELETE",
    url: "/product/:id",
    handler: productController.delete,
  },
  {
    method: "GET",
    url: "/category",
    handler: categoryController.get,
  },
  {
    method: "POST",
    url: "/categoryLimit",
    handler: categoryController.getLimit,
  },
  {
    method: "POST",
    url: "/category",
    handler: categoryController.search,
  },
  {
    method: "POST",
    url: "/categoryAdd",
    handler: categoryController.add,
  },
  {
    method: "GET",
    url: "/subCategory",
    handler: subCategoryController.get,
  },
  {
    method: "POST",
    url: "/subCategory",
    handler: subCategoryController.search,
  },
  {
    method: "POST",
    url: "/subCategoryAdd",
    handler: subCategoryController.add,
  },

  {
    method: "DELETE",
    url: "/category/:id",
    handler: categoryController.delete,
  },
  {
    method: "GET",
    url: "/news",
    handler: newsController.get,
  },
  {
    method: "POST",
    url: "/newsAdd",
    handler: newsController.add,
  },
  {
    method: "GET",
    url: "/brand",
    handler: brandController.get,
  },
  {
    method: "POST",
    url: "/brandAdd",
    handler: brandController.add,
  },
  // {
  //   method: "POST",
  //   url: "/quatation",
  //   handler: quatationController.search,
  // },
  // {
  //   method: "POST",
  //   url: "/quatationAdd",
  //   handler: quatationController.add,
  // },
  // {
  //   method: "PUT",
  //   url: "/quatation/:id",
  //   handler: quatationController.update,
  // },
  // {
  //   method: "GET",
  //   url: "/favorite",
  //   handler: favoriteController.get,
  // },
  // {
  //   method: "POST",
  //   url: "/favoriteAdd",
  //   handler: favoriteController.add,
  // },
  // {
  //   method: "POST",
  //   url: "/favoriteSearch",
  //   handler: favoriteController.search,
  // },
  // {
  //   method: "POST",
  //   url: "/favoriteGetSize",
  //   handler: favoriteController.getSize,
  // },
  // {
  //   method: "DELETE",
  //   url: "/favorite/:id",
  //   handler: favoriteController.delete,
  // },
  {
    method: "GET",
    url: "/user",
    handler: userController.get,
  },
  {
    method: "POST",
    url: "/user",
    handler: userController.search,
  },
  {
    method: "GET",
    url: "/user/:id",
    handler: userController.getById,
  },
  {
    method: "POST",
    url: "/userAdd",
    handler: userController.add,
  },
  {
    method: "PUT",
    url: "/user/:id",
    handler: userController.update,
  },
  {
    method: "DELETE",
    url: "/user/:id",
    handler: userController.delete,
  },
];

module.exports = routes;
