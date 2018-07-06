const multer = require('multer');
var path = require('path');
const uuidv4 = require('uuid/v4');

 // configure storage
 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({storage: storage});
  module.exports = upload;