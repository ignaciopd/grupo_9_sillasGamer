const express = require("express")
const router= express.Router()
const path = require("path");

router.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

router.get("/shopp-cart", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });  

router.get("/join-us", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  });

router.get("/sign-in", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });
  
router.get("/product-detail", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productDetail.html"));
  });
router.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/cart.html"));
  });    


module.exports = router