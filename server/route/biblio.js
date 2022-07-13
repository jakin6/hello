const express = require('express')
const router =express.Router();

const bookController = require('../controller/book')

//book crud
router.get('/book',bookController.view)
router.get('/editbook',bookController.edit)
router.get('/addbook',bookController.addBook)

const visitorController = require('../controller/visitors')
router.get('/visitor',visitorController.viewvisitor)

//book category crud
const categoryController = require('../controller/book_categorie')
router.get('/category',categoryController.view)

//book withdraw crud
const withdrawController = require('../controller/withdraw')
router.get('/withdraw', withdrawController.view)

//book return crud
const returnController = require('../controller/returns')
router.get('/returns', returnController.view)
module.exports=router
