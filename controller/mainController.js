const path = require("path");
const controller = {
    home: (req, res) => {
        res.render("index.ejs");
    },
    
    shoppCart: (req, res) => {
        res.render("cart.ejs");
    },
    
    joinUs: (req, res) => {
        res.render("register.ejs");
    },

    signIn: (req, res) => {
        res.render("login.ejs");
    },
    products: (req, res) => {
        res.render("productDetail.ejs");
    },

}

module.exports = controller