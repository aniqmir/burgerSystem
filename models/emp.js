var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmpSchema = new Schema(
  {
    Emp_fname: {type: String, required: true, max: 100},
    Emp_lname: {type: String, max: 100},
    Email: {type: String, required: true, max: 100},
    Emp_password: {type: String, required: true, max: 50},
    Emp_start_date: {type: Date},
  }

);

//Export model
module.exports = mongoose.model('Employee',EmpSchema);
