var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var EmpSchema = new Schema(
  {
    Emp_fname: {type: String, required: true, max: 100},
    Emp_lname: {type: String, max: 100},
    Email: {type: String, required: true, max: 100},
    Emp_password: {type: String, required: true, max: 50},
    Emp_phone: {type: String, required: true, max: 50},
    Emp_start_date: {type: Date},
  }

);
// Execute before each user.save() call
EmpSchema.pre('save', function(callback) {
  var emp = this;

  // Break out if the password hasn't changed
  if (!emp.isModified('Emp_password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(emp.Emp_password, salt, null, function(err, hash) {
      if (err) return callback(err);
      emp.Emp_password = hash;
      callback();
    });
  });
});

EmpSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.Emp_password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//Export model
module.exports = mongoose.model('Employee',EmpSchema);
