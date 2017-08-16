var express = require('express');
var app = express();
var itemRouter =  express.Router();

//Get the item model :
var item = require('../models/item');

//Define your routes here:
//Get all items:
itemRouter.route('/').get(function(req, res) {
  item.find(function(err, itms){
    if(err) {
      console.log(err);
    }
    else {
      res.json(itms);
    }
  })
});

//get single item route...
itemRouter.route('/edit/:id').get(function(req, res) {
  var id = req.params.id;
  Item.findById(id, function(err, item) {
    res.json(item);
  });
});

//Create item
itemRouter.route('/add/post').post(function(req, res) {
  var item = new Item(req.body);
  item.save()
  .then( item => {
    res.json('Item saved successfully');
  })
  .catch(err => {
    res.status(400).send("Unable to save to DB");
  });
});

//Update item :
itemRouter.route('/update/:id').post(function(req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item) {
      return next(new Error('Could not load Document!'));
    } else {
        item.item = req.body.item;

        item.save().then(item => {
          res.json('Update complete');
        })
        .catch( err => {
            res.status(400).send("Unable to update the DB");
        });
    }
  });
});

//Delete item route :
itemRouter.route('/delete/:id').get(function(req, res){
  Item.findByIdAndRemove({_id: req.params.id},
    function (err, item) {
      if (err) res.json(err);
      else res.json('successfully removed');
    }
  );
});

module.exports = itemRouter;
