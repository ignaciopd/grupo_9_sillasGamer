const express = require("express")
const router= express.Router()

router.use ('/', require('./main.routes'))

module.exports = router