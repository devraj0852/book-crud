const express = require('express')
const router = express.Router();

const BookController = require('./controller/book.controller');

router.post('/add-book', BookController.addBook);
router.get('/get-all-books', BookController.getAllBooks);
router.put('/update-book/:id', BookController.updateBook);
router.delete('/delete-book/:id', BookController.deleteBook);

module.exports = router