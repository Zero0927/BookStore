const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Bookstore = require('./models/bookstore')

mongoose.connect('mongodb://localhost:27017/book-store', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/makebookstore', async(req, res)=>{
    const book = new Bookstore({title: 'Harry Potter', description: 'Series of fantasy novels'});
    await book.save();
    res.send(book)
})

app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})