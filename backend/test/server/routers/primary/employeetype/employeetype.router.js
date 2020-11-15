const {
  BaseRouter
} = require('xc-core');

class EmployeetypeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeetypeService = app.$services.primary.EmployeetypeService;
    this.EmployeetypeMiddleware = app.$middlewares.primary.EmployeetypeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.EmployeetypeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.EmployeetypeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.EmployeetypeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeetypeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeetypeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeetypeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeetypeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.EmployeetypeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.EmployeetypeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.EmployeetypeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.EmployeetypeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.EmployeetypeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.EmployeetypeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.EmployeetypeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.EmployeetypeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/employeetype*",this.EmployeetypeMiddleware.default)

    router.get('/api/v1/employeetype', this.EmployeetypeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/employeetype', this.EmployeetypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employeetype/findOne', this.EmployeetypeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/employeetype/groupby/:columnName', this.EmployeetypeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/employeetype/distribution/:columnName', this.EmployeetypeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/employeetype/distinct/:columnName', this.EmployeetypeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/employeetype/aggregate/:columnName', this.EmployeetypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employeetype/count', this.EmployeetypeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/employeetype/bulk', this.EmployeetypeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/employeetype/bulk', this.EmployeetypeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/employeetype/bulk', this.EmployeetypeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/employeetype/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employeetype/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employeetype/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employeetype/:id/exists', this.EmployeetypeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = EmployeetypeRouter;