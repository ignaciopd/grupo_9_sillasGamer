const express = require("express")
const router= express.Router()
const productcontroller = require("../controller/productsController")
const multer = require('multer');
const path = require('path')




module.exports = router