const router = require('express').Router();

const addProduct = require("../controllers/products/add");
const getAllProducts=require("../controllers/products/getAll");


router.get('/', getAllProducts);
router.post('/add', addProduct);

module.exports = router;
