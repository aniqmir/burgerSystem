var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema(
  {
    item_name: {type: String, required: true, max: 100},
    item_desc: {type: String, required: true, max: 100},
    item_added_date: {type: Date},
    item_type: {type: String, required: true, max: 100},
    item_price: {type: String, required: true, max: 100},
    build: {type: Boolean, required: true, max: 100},
    content {type: Buffer,contentType: String, max: 100},

  }

);

//Export model
module.exports = mongoose.model('Employee',EmpSchema);
