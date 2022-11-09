var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new');
});

router.route('/new')
  .post((req,res) => {
    const name = req.body.name;
    const message = req.body.message;

    messages.push({name: name, message: message, date: new Date})
  })

module.exports = router;
