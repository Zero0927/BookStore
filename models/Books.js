'use strict';

const mongoose  = require('mongoose');

let Schema  = mongoose.Schema;

let BooksSchema = new Schema({
    book_id: Number,
    id: String,
    title: String,
    description: String,
    price: Number
},{collection: 'books'});

module.exports = mongoose.model('books', BooksSchema);