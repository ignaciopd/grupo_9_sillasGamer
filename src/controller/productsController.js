
const path = require("path");
const db = require('../database/products.json')
const fs = require('fs');

const productcontroller = {
  
  shop: (req,res,next) => {
    res.render('shop',{item:db})
  },


    
}

module.exports = productcontroller;