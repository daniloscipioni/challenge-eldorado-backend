const router = require('express-promise-router')();
const deviceController = require('../controllers/device.controller');

router.get('/devices', deviceController.listAllDevices);

router.post('/add-device', async(req, res)=> {
    const register = await deviceController.registerDevice(req.body);
    res.status(201).json(register);
})

router.delete('/remove-device/:id', async(req, res)=> {
    const deleteRegister = await deviceController.deleteDevice(req.params.id);
    res.status(200).json(deleteRegister);
})


module.exports = router;
