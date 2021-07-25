const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookStoreSchema = new Schema({
    title: String,
    price: String,
    description: String,
    publication: String
});

module.exports = mongoose.model('Bookstore', BookStoreSchema);