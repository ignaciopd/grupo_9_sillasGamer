const express = require("express")
const router= express.Router()
const controller = require("../controller/productsController")

router.get ('/', controller.indexProduct)

router.get ('/product-detail/:id', controller.products)

module.exports = router