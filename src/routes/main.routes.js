const express = require("express")
const router= express.Router()
const mainController = require("../controller/mainController")
const multer = require('multer');
const path = require('path')


router.get ("/", mainController.home);

router.get("/shopp-cart", mainController.shoppCart);  

router.get("/join-us", mainController.joinUs);

router.get("/sign-in", mainController.signIn);

router.get("/about-us",mainController.aboutUs);

router.get("/questions",mainController.preguntasFrecuentes);

router.get("/contact",mainController.contact);

module.exports = router