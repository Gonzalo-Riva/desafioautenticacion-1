const BdProductManager = require('../dao/mongoManager/BdProductManager');
const { ProductRepository } = require('../service/index.repository');

const getProducts = async (req, res) => {
  const { limit, page, sort, ...query } = req.query;
  const products = await ProductRepository.get(page, limit, sort, query);
  const { docs } = products;
  const state = products ? 'success' : 'error';
  if (products) {
    res.json({ ...products, status: state, payload: docs });
  } else {
    res.json(products);
  }
};
const addProduct = async (req, res) => {
  const product = req.body;
  const newproduct = await ProductRepository.add(product);
  if (newproduct) {
    res.json(newproduct);
  } else {
    res.json(newproduct);
  }
};

const getProductId = async (req, res) => {
  const id = req.params.pid;
  const getProductId = await ProductRepository.getId(id);
  if (getProductId) {
    res.json(getProductId);
  } else {
    res.json(getProductId);
  }
};

const UpdateProduct = async (req, res) => {
  const id = req.params.pid;
  const product = req.body;
  const UpdateProductId = await BdProductManager.UpdateProduct(id, product);
  if (UpdateProductId) {
    res.json(UpdateProductId);
  } else {
    res.json(UpdateProductId);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.pid;
  const deleteproduct = await BdProductManager.DeleteProductId(id);
  if (deleteproduct) {
    res.json(deleteproduct);
  } else {
    res.json(deleteproduct);
  }
};

module.exports = {
  getProducts,
  getProductId,
  addProduct,
  UpdateProduct,
  deleteProduct
};


