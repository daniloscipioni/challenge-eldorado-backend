const router = require('express-promise-router')();
const deviceController = require('../controllers/device.controller');

/**
 * GET /api/devices
 * @summary Returns a list of devices.
 * @description API that returns a list of devices registered.
 * @tag Devices
 * @response 200 - A JSON array of devices
 * @responseContent {string[]} 200.application/json 
 */
router.get('/devices', deviceController.listAllDevices);

/**
 * POST /api/add-device
 * @summary Register a new device.
 * @description API that register a new device.
 * @tag Devices
 * @response 200 - A JSON array
 * @responseContent {string[]} 200.application/json 
 */
router.post('/add-device', async(req, res)=> {
    const register = await deviceController.registerDevice(req.body);
    res.status(201).json(register);
})

/**
 * DELETE /api/remove-device/:id
 * @summary Delete a device.
 * @description API that deletes a device.
 * @tag Devices
 * @response 200 - A JSON array
 * @responseContent {string[]} 200.application/json 
 */
router.delete('/remove-device/:id', async(req, res)=> {
    const deleteRegister = await deviceController.deleteDevice(req.params.id);
    res.status(200).json(deleteRegister);
})


module.exports = router;
