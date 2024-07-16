
class ProductController {

  getAll(req, res) {
    res.status(200).send(['OK','OK','OK','OK']);
  }

  getOne(req, res) {
    res.status(200).send(['OK']);
  }

  create(req, res) {
    res.status(200).send(['Create']);
  }

  update(req, res) {
    res.status(200).send(['Update']);
  }

  delete(req, res) {
    res.status(200).send(['Delete']);
  }

}

export default new ProductController();