import productModel from "../models/product.model.js";

class ProductController {

  static async getAll(req, res) {
    try {
      const result = await productModel.find({});
      res.status(200).send(result);
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

  static async search(req, res) {
    try {
      const term = req.query.q;
      const result = await productModel.find({ title: term });
      res.status(200).send(result);
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await productModel.findById(id);
      res.status(200).send(result);
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

  static async create(req, res) {
    try {
      const result = await productModel.create(req.body);
      res.status(201).send({
        message : "created", 
        data :result 
      });
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const result = await productModel.findByIdAndUpdate(id, req.body);
      res.status(200).send({
        message : "updated", 
        data :req.body 
      });
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await productModel.findByIdAndDelete(id);
      res.status(200).send({
        message : "removed"
      });
        
    } catch (error) {
      res.status(500).send({ message: `Error request: ${error.message}` });  
    }
  }

}

export default ProductController;