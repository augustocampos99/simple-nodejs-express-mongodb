import productModel from "../models/product.model.js";

class ProductController {

  static async getAll(req, res, next) {
    try {
      let { page = 1, limit = 5 } = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      
      const result = await productModel.find({})
      .skip((page - 1) * limit)
      .limit(limit);

      res.status(200).send(result);
        
    } catch (error) {
      next(error);  
    }
  }

  static async search(req, res, next) {
    try {
      let { page = 1, limit = 5 } = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      
      const term = req.query.q;
      const regex = new RegExp(term, "i"); // Regex for uppercase and lowercase
      const result = await productModel.find({ title: regex })
      .skip((page - 1) * limit)
      .limit(limit);

      res.status(200).send(result);
        
    } catch (error) {
      next(error);  
    }
  }

  static async getById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await productModel.findById(id);

      if(result === null) {
        res.status(404).send('');
        return;
      }

      res.status(200).send(result);
        
    } catch (error) {
      next(error);  
    }
  }

  static async create(req, res, next) {
    try {
      const result = await productModel.create(req.body);
      res.status(201).send({
        message : "created", 
        data :result 
      });
        
    } catch (error) {
      next(error);  
    }
  }

  static async update(req, res, next) {
    try {
      const id = req.params.id;
      const result = await productModel.findByIdAndUpdate(id, req.body);

      if(result === null) {
        res.status(404).send('');
        return;
      }

      res.status(200).send({
        message : "updated", 
        data :req.body 
      });
        
    } catch (error) {
      next(error);  
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;
      await productModel.findByIdAndDelete(id);
      res.status(200).send({
        message : "removed"
      });
        
    } catch (error) {
      next(error);  
    }
  }

}

export default ProductController;