const express = require("express")
const router= express.Router()
const controller = require("../controller/productsController")
const multer = require('multer');
const path = require('path')

router.get ('/', controller.indexProduct)

router.get ('/product-detail/:id', controller.products)

router.get ('/create-product', controller.formCreateProduct)

router.post ('/create-product', controller.createProduct)  



module.exports = router