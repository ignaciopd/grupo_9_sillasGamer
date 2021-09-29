const express = require("express")
const controller = require("../controller/productsController")
const router= express.Router()
router.use ('/', require('./main.routes'))

router.get ('/product-detail/:id', controller.products)
module.exports = router