const express = require('express');
const router = express.Router();
const actsController = require('../controllers/acts.controller');

router.post('/createAct', actsController.createAct);
router.put('/updateAct/:id', actsController.updateAct);
router.delete('/deleteAct/:id', actsController.deleteAct);

module.exports = router;