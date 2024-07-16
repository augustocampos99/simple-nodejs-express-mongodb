import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();
router.get("/", (req, res) => { res.status(200).send({message : "Simple store api..."}) });

router.get("/products", productController.getAll);
router.get("/products/search", productController.search);
router.get("/products/:id", productController.getById);

router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

export default router;
