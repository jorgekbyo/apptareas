var express = require('express');
var router = express.Router();

/* GET home page. */
var tareas = [
	{
		"nom":"Diseño wireframe",
		"etiquetes": [ "wireframe","app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Reunión",
		"etiquetes": ["app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Desarrollo Layout",
		"etiquetes": [ "layout","app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Reunión cliente",
		"etiquetes": [ "reunión","app","hibrida"],
		"realització":"36"
	}
]
router.get('/', function(req, res, next) {
  res.render('tareas', { title: 'appJorge', tareas: tareas });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'appJorge'});
});

router.post('/crear' ,function(req, res, next) {
  var nom = req.body.nombre;
  var etiquitas = req.body.etiquetas;
  var realizacion = req.body.realizacion;

  eti = eti.split(",");
  var add = {
  	 "nom": nom,
  	 "etiquetes": etiquetas,
  	 "realització": realizacion
  }
  tareas.push(add);
  res.redirect('/tareas');
});

module.exports = router;