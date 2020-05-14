var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/games', function (req, res) {
    res.send('Hello GAMES!');
  });

  router.get('/games/:id', function (req, res) {
      let id = req.id
      let sql = 
      `select * from games where id =${id}`

      connection
    res.send('Hello GAMES!');
  });


module.exports = router;