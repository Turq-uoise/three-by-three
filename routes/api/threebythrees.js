const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../server-config/ensureLoggedIn');
const threebythreesCtrl = require('../../controllers/api/threebythrees');

// POST /api/threebythrees
router.get('/', threebythreesCtrl.index);
router.post('/create', ensureLoggedIn,threebythreesCtrl.create);
router.post('/rate',threebythreesCtrl.rate)
router.get('/:id', threebythreesCtrl.show);

module.exports = router;