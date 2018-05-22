var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrdersSchema = new Schema(
  {
    products:[{item_name: {type: String, required: true, max: 100},price: {type: Number,},
    quantity:{type:String}}],
    date_sale: {type: Date},
    total: {type:Number},
    status: {type: String, default: 'Recieved'},
    customer_email:{type: String }
  }
);

//Export model
module.exports = mongoose.model('Sale',OrdersSchema);
