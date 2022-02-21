const router = require('express-promise-router')();
const categoryController = require('../controllers/category.controller');

/**
 * GET /api/categories
 * @summary Returns a list of categories.
 * @description API that returns a list of categories available to choose.
 * @tag Categories
 * @response 200 - A JSON array of user categories
 * @responseContent {string[]} 200.application/json 
 */
router.get('/categories', categoryController.listAllCategories);

/**
 * POST /api/add-category
 * @summary Register a new category.
 * @description API that Register a new category.
 * @tag Categories
 * @response 200 - A JSON array of categories
 * @bodyContent {Categories} application/json
 * @responseContent {string[]} 200.application/json 
 */
router.post('/add-category', async(req, res)=> {
    const register = await categoryController.registerCategory(req.body);
    res.status(201).json(register);
})

/**
 * DELETE /api/remove-category/:id
 * @summary Delete a category.
 * @description API that deletes a new category.
 * @tag Categories
 * @response 200 - A JSON array
 * @queryParam {integer} [id] - id
 * @responseContent {string[]} 200.application/json 
 */
router.delete('/remove-category/:id', async(req, res)=> {
    const deleteRegister = await categoryController.deleteCategory(req.params.id);

    res.status(200).json(deleteRegister);
})

module.exports = router;
