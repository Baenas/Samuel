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

  let objaciertos = {

    ac1: 0,
    ac2: 0,
    ac3: 0,
    ac4: 0
  }
  if (datainfo.aciertos >= 3) {

    objaciertos.ac1 = 4

  }

  if (datainfo.aciertos >= 6) {

    objaciertos.ac2 = 1

  }
  if (datainfo.aciertos >= 9) {

    objaciertos.ac3 = 4

  }
  if (datainfo.aciertos >= 12) {

    objaciertos.ac4 = 2

  }
  res.render('menu', { num1: objaciertos.ac1, num2: objaciertos.ac2, num3: objaciertos.ac3, num4: objaciertos.ac4, title: 'Bienvenido Samuel', aci: datainfo.aciertos });
});
router.get('/test1_1', function (req, res, next) {
  let ira = datainfo.actualp1
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p1', { objectdata });

});

router.get('/test1_2', function (req, res, next) {
  let ira = datainfo.actualp2
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p2', { objectdata });

});
router.get('/test1_3', function (req, res, next) {
  let ira = datainfo.actualp3
  var filtered = dataall.filter(a => a.id == ira);
  let objectdata = {
    filtered,
    datainfo
  }

  res.render('p3', { objectdata });

});

router.get('/next', function (req, res, next) {
  datainfo.actualp1 = datainfo.actualp1 += 3;
  datainfo.update = 1;

  datainfo.aciertos++;
  res.redirect('/menu');


});
router.get('/next2', function (req, res, next) {
  datainfo.actualp2 = datainfo.actualp2 += 3;

  datainfo.aciertos++;

  res.redirect('/test1_2');


});
router.get('/next3', function (req, res, next) {
  datainfo.actualp3 = datainfo.actualp3 += 3;


  datainfo.aciertos++;
  res.redirect('/test1_3');


});
router.get('/test1_4', function (req, res, next) {
  let rawdata = fs.readFileSync('data.json');
  let dataall = JSON.parse(rawdata);
  console.log(dataall)

  res.render('spec', { dataall });
});
router.get('/reset', function (req, res, next) {
  datainfo.actualp1 = 0

  datainfo.actualp2 = 0
  datainfo.actualp3 = 0
  datainfo.aciertos = 0

  res.render('menu');



});
module.exports = router;
