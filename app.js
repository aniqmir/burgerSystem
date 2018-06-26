var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
const multer =require('multer');
const uuidv4 = require('uuid/v4');

var app = express();
 

//use helmet
var helmet = require('helmet');
app.use(helmet());


var indexRouter = require('./routes/index')
var UserRouter = require('./routes/users');
var adminRouter= require('./routes/admin');
var EmpRouter= require('./routes/emps');
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

var expressSession = require('express-session');
app.set('trust proxy', 1) // trust first proxy
var expiryDate = new Date(Date.now() + 60 * 60 *60 * 1000 *1000*10) // 1 hour
app.use(expressSession({
name: 'eat',
secret: 'burgerandfries',
key: 'user',
resave: true,
saveUninitialized:true,
cookie: {
secure: false,
httpOnly: true,
expires: expiryDate }
}));
//app.res.header("Access-Control-Allow-Origin", "http://127.0.0.1:9000");

app.use('/', indexRouter);
app.use('/api/user',UserRouter);
app.use('/api/admin',adminRouter);
app.use('/api/emp',EmpRouter);



   // configure storage
   const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      /*
        Files will be saved in the 'uploads' directory. Make
        sure this directory already exist.
      */
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      /*
        uuidv4() will generate a random ID that we'll use for the
        new filename. We use path.extname() to get
        the extension from the original file name and add that to the new
        generated ID. These combined will create the file name used
        to save the file on the server and will be available as
        req.file.pathname in the router handler.
      */
      const newFilename = `${req.body.item_name}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({storage: storage});
  app.post('/upload',upload.single('image'),(req, res,next) => {
   console.log('we are here');
   console.log(req.file);
   console.log(req.body);
   res.send('saved');
  });






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
