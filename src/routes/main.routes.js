const express = require("express")
const router= express.Router()
const controller = require("../controller/mainController")

router.get ("/", controller.home);

router.get("/shopp-cart", controller.shoppCart);  

router.get("/join-us", controller.joinUs);

router.get("/sign-in", controller.signIn);

router.get("/create-product",controller.createProduct);
  

module.exports = router