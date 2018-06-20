var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrdersSchema = new Schema(
  {
    products:[{item_name: {type: String, required: true, max: 100}, quantity:{type:String},
    price: {type: Number,},
   }],
    date_sale: {type: Date},
    total: {type:Number},
    status: {type: String, default: 'Recieved'},
    customer_email:{type: String },
    customer_address:{type: String, required:true }
  }
);

//Export model
module.exports = mongoose.model('Sale',OrdersSchema);
