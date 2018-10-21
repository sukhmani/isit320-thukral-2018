import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

export default router;
