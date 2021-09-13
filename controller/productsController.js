const path = require("path");

const controller = {
    products: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"));
      },
}

module.exports = controller