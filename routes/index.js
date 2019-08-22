var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/courses', function(req, res, next) {
    var jsonPath = path.resolve(__dirname,"../courses.json");
    var course = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
    // res.status = 404;
    res.json(course);
    // console.log(`${JSON.stringify(course)}`)
});

module.exports = router;
