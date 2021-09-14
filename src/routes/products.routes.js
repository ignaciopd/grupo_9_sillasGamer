const express = require("express")
const router= express.Router()
const controller = require("../controller/productsController")

router.get ('/', controller.products)


module.exports = router