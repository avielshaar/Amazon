import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product._id) {
    res.send(product);
  } else {
    res.status(404).send();
  }
};

export { getProducts, getProductById };
