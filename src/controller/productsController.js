
const path = require("path");
const db = require('../database/products.json')

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
    
}

module.exports = controller;