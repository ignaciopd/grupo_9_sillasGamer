const fs = require ('fs')
const path = require("path");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));


const controller = {
  indexProduct: (req, res) => {
    let allProducts = products; 
    res.render("indexProduct.ejs", {allProducts});  
  },

  productsdetails: (req, res) => {
    res.render("productDetail.ejs") 
  },
}

module.exports = controller