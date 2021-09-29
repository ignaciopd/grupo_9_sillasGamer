const express = require("express")
const router= express.Router()
const controller = require("../controller/productsController")

router.get ('/', controller.indexProduct)

router.get ('/productsDetails', controller.productsdetails)

module.exports = router