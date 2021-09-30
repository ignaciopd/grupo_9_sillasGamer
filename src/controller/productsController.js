
const path = require("path");
const db = require('../database/products.json')
const fs = require('fs');

const controller = {
  products: (req, res, next) => {
    const id= req.params.id;
    const details = db.find((item)=>item.id == id);
    res.render("productDetail",{product:details})
  },
  shop: (req,res,next) => {
    res.render('shop',{item:db})
  },

  indexProduct: (req, res, next) => {
    const allProducts = db;
    res.render("indexProduct", { product:allProducts})
  },

  formCreateProduct: (req, res, next) => {
    res.render("createProduct")
  },

  createProduct:(req, res, next) => {

    res.render("createProduct")
  },

    
}

module.exports = controller;