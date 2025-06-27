import { Router } from 'express';
import { createProduct, deleteProduct, getAllProduct, getproductById, updateProduct } from '../controller/productController.js';


const router = Router();

// To get all products
router.get('/', getAllProduct)

// To get product by id
router.get('/:id', getproductById)

// To create a product
router.post('/:id', createProduct)

// To create a updated product
router.put('/:id', updateProduct)

// To delete a product
router.delete('/:id', deleteProduct)



export default router;  
