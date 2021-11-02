const path = require("path");
const db = require('../database/products.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


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
    createProduct: (req,res) => {
        res.render("createProduct.ejs")
    },
    aboutUs: (req,res) => {
        res.render("aboutUs.ejs")
    },
    preguntasFrecuentes: (req,res) => {
        res.render("preguntasFrecuentes.ejs")
    },
    contact: (req,res) => {
        res.render("contact.ejs")
    },
    indexProduct: (req, res, next) => {
        const allProducts = db;
        res.render("indexProduct", { product:allProducts})
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
    
    getEdit: (req, res, next) => {
        const id= req.params.id;
        const details = db.find((item)=>item.id == id);
        res.render("editProduct",{product:details})
      },  
    
    editProduct: (req, res, next) => {
        let id= req.params.id;
        const archivo= req.file;
        const {name, description, category, color, price}= req.body;
        const indexProduct = db.findIndex((item)=>item.id == id);
        db[indexProduct] = {
            id: id,
            name: name,
            description: description,
            category: category,
            color: color,
            img: `img/${archivo.filename}`,
            price:price
        };
        fs.writeFileSync(path.join(__dirname,'../database/products.json'),JSON.stringify(db,null, 4), {encoding: "utf8",});
        res.render("productDetail",{product:details});
      },
    deleteProduct: (req, res, next) => {
        let idDelete = req.params.id;
        const newdb = model.filter((item) => item.id != idDelete);
        fs.writeFileSync(
            path.join(__dirname, '../database/products.json'),
            JSON.stringify(newdb, null, 4),
            { encoding: "utf-8", }
        );
        res.redirect('/');
    }
}

module.exports = mainController;