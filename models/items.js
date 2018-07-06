var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema(
  {
    primaryKey: {type: String, required: true},
    item_name: {type: String, required: true, max: 100},
    item_desc: {type: String, required: true, max: 100},
    item_added_date: {type: Date},
    item_type: {type: String, required: true, max: 100},
    item_price: {type: String, required: true, max: 100},
    build: {type: Boolean, required: true, max: 100},
    ingredients: {type: Object, required:true},
    imgPath: {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('Item',itemSchema);
