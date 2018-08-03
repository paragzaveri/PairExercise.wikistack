const router = require('express').Router();

router.get('/', (req, res, next)=>{
  res.send('got to GET /user/');
});

router.post('/', (req, res, next)=>{
  res.send('got to Post /user/');
});

router.get('/add', (req, res, next)=>{
  res.send('got to GET /user/');
});

module.exports = router;
