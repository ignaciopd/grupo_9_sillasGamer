const express = require("express")
const router= express.Router()
const productcontroller = require("../controller/productsController")
const multer = require('multer');
const path = require('path')

router.get ('/', productcontroller.indexProduct)


module.exports = router