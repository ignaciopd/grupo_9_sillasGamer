const path = require("path");

const controller = {
  products: (req, res) => {
    res.render("productDetail.ejs");
},
    
}

module.exports = controller