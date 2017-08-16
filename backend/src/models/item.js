var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Your own collection / schema goes here:

var Item = new Schema(
  {
    item: {
      type: String
    },
  },
  { collection: "items"}
);

module.exports = mongoose.model('Item', Item);
