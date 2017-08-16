var express = require('express');
var app = express();
var port = 4200;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();

//Mongo DB connection:
mongoose.connect(process.env.MONGO_LINK,
    {useMongoClient: true}
  )
  .then(
    () => { //All Ok
      console.log('Start')
    }
  ).catch(err => {
     console.log('Cannot connect to mongo :', err.stack);
     process.exit(1);
  });


//Backend router :
var itemRouter = require('./src/routes/itemRouter');

//Use middlewares:
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

//Start the server:
app.listen( port, function () {
  console.log('Server is running on Port:', port);
});
