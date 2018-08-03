const router = require('express').Router();
const { addPage } = require("../views/");
const { Page } = require("../models");

router.get('/', (req, res, next)=>{
  res.redirect('/wiki');
});

// router.post('/', (req, res, next)=>{
//   res.send('got to Post /wiki/');
// });

router.get('/add', (req, res, next)=>{
  res.send(addPage());
});

router.post('/add', (req,res,next) => {
  res.json(req.body);
});

router.post('/', async (req,res,next) => {
  const page = new Page({
    title: 'test',
    content: 'test'
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;
