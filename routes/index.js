var express = require('express');
var router = express.Router();
const formularioController = require ('../controllers/formularioController')
const pageStaticController = require ('../controllers/pageStaticController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'KLM Corretora de Seguros' });
// });
router.get('/', pageStaticController.viewPage);
router.get('/sobrenos', pageStaticController.about);
router.get('/vida', pageStaticController.life);
router.get('/acidentesPessoais', pageStaticController.personalAccidents);
router.get('/protecaoPlanejada', pageStaticController.plannedProtection);
router.get('/previdencia', pageStaticController.privatePension);
router.get('/protecao', pageStaticController.protectionAndMonitoring);
router.get('/healthPet', pageStaticController.healthForPet);
router.get('/consorcio', pageStaticController.consortium);
router.get('/carroFacil', pageStaticController.easyCar);

router.get('/acidentesPessoaisColetivo', pageStaticController.vidaColetivo);
router.get('/vidaColetivo', pageStaticController.acidentesPessoaisColetivo);
router.get('/saudeOdonto', pageStaticController.saudeOdonto);
module.exports = router;