const express = require('express')
const router =express.Router();

const bookController = require('../controller/book')

//book crud
router.get('/book',bookController.view)
router.get('/editbook',bookController.edit)
router.get('/addbook',bookController.addBook)

const visitorController = require('../controller/visitors')
router.get('/visitor',visitorController.viewvisitor)
module.exports=router
