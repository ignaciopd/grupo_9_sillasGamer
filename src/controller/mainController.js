const path = require("path");
const db = require('../database/products.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


const mainController = {
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
    createProduct: (req,res) => {
        res.render("createProduct.ejs")
    },

    postcreat: (req,res) => {
        const archivo = req.file;
        const {name, description, category, color, price}= req.body;
        const producto = {
          id: uuidv4(),
          name: name,
          description: description,
          category: category,
          color: color,
          img: `img/${archivo.filename}`,
          price:price
        };
        const allProducts = db;
        db.push(producto);
        fs.writeFileSync(path.join(__dirname,'../database/products.json'), JSON.stringify(db,null, 4), {encoding: "utf8",});
        
        
        
        res.render("indexProduct", { product:allProducts})
    },

    products: (req, res, next) => {
        const id= req.params.id;
        const details = db.find((item)=>item.id == id);
        res.render("productDetail",{product:details})
      },

}

module.exports = mainController