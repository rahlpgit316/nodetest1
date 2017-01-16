var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model;
/* GET users listing. */
router.get('/userlist', function(req, res, next) {
   var mongooseDb = req.db;
   // Create a schema
    let userListSchema = new mongoose.Schema({
        username: String,
        email: String
      }, {collection: 'userlist'});
      

   if (mongoose.models.userlist) {
      model = mongoose.model('userlist');
    } else {
      model = mongoose.model('userlist', userListSchema);
    }
     model.find({},{},function(e,docs){
        res.json(docs);
      });
});

module.exports = router;
