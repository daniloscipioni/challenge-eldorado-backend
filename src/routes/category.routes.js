const router = require('express-promise-router')();
const categoryController = require('../controllers/category.controller');

router.get('/categories', categoryController.listAllCategories);

router.post('/add-category', async(req, res)=> {
    const register = await categoryController.registerCategory(req.body);
    res.status(201).json(register);
})

router.delete('/remove-category/:id', async(req, res)=> {
    const deleteRegister = await categoryController.deleteCategory(req.params.id);

    res.status(200).json(deleteRegister);
})

module.exports = router;
