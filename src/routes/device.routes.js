const router = require('express-promise-router')();
const deviceController = require('../controllers/device.controller');

router.get('/devices', deviceController.listAllDevices);

module.exports = router;
