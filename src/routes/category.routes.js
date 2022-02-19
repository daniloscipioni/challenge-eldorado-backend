const router = require('express-promise-router')();
const categoryController = require('../controllers/category.controller');

router.get('/categories', categoryController.listAllCategories);

module.exports = router;
