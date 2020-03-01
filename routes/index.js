const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let dataall = JSON.parse(rawdata);
let rawinfo = fs.readFileSync('info.json');
let datainfo = JSON.parse(rawinfo);
/* GET home page. */
let estado = 0;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bienvenido Samuel' });
});
router.get('/menu', function (req, res, next) {

  res.render('menu', { title: 'Bienvenido Samuel' });
});
router.get('/test1_1', function (req, res, next) {
  let ira = datainfo.actual
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p1', { objectdata });

});

router.get('/test1_2', function (req, res, next) {
  let ira = datainfo.actual
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p2', { objectdata });

});
router.get('/test1_3', function (req, res, next) {
  let ira = datainfo.actual
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p3', { objectdata });

});

router.get('/next', function (req, res, next) {
  datainfo.actual++;
  datainfo.update = 1;


  res.redirect('/menu');


});
router.get('/test1_4', function (req, res, next) {
  let rawdata = fs.readFileSync('data.json');
  let dataall = JSON.parse(rawdata);
  console.log(dataall)

  res.render('spec', { dataall });
});
router.get('/reset', function (req, res, next) {
  datainfo.actual = 0
  datainfo.aciertos = 0

  res.render('menu');



});
module.exports = router;
