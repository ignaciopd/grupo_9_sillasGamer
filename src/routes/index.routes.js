const express = require("express")
const router= express.Router()
router.use ('/', require('./main.routes'))

router.use ('/product-detail', require ('./products.routes'))
module.exports = router