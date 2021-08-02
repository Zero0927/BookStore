const express = require('express')
const app = express()
const port = 3000
const path = require('path');


//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, '/dist')))

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/BookstoreDB", function (err, db) {  
     if(err) throw err;
     //Write databse Insert/Update/Query code here..
      console.log("Database has been created")          
});

app.get('/', (req,res)=>{
  res.render('home.ejs')
})


app.listen(port, () => {
  console.log(`Listening at port:${port}`)
})