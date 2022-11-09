var express = require('express');
var router = express.Router();

function dateTrimmer(date) {
  return date.toString().substring(4, 21);
}

let messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    date: dateTrimmer(new Date())
  },
  {
    text: "Hello World!",
    user: "Charles",
    date: dateTrimmer(new Date())
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {messages: messages});
});

module.exports = router;
