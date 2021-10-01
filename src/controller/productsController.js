
const path = require("path");
const db = require('../database/products.json')
const fs = require('fs');

const productcontroller = {
  
  shop: (req,res,next) => {
    res.render('shop',{item:db})
  },

  indexProduct: (req, res, next) => {
    const allProducts = db;
    res.render("indexProduct", { product:allProducts})
  },
    
}

module.exports = productcontroller;