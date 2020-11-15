const {
  BaseRouter
} = require('xc-core');

class CustomersRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomersService = app.$services.primary.CustomersService;
    this.CustomersMiddleware = app.$middlewares.primary.CustomersMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CustomersService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CustomersService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CustomersService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CustomersService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CustomersService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CustomersService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CustomersService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CustomersService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CustomersService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CustomersService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CustomersService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CustomersService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CustomersService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CustomersService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CustomersService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/customers*",this.CustomersMiddleware.default)

    router.get('/api/v1/customers', this.CustomersMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/customers', this.CustomersMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/customers/findOne', this.CustomersMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/customers/groupby/:columnName', this.CustomersMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/customers/distribution/:columnName', this.CustomersMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/customers/distinct/:columnName', this.CustomersMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/customers/aggregate/:columnName', this.CustomersMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/customers/count', this.CustomersMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/customers/bulk', this.CustomersMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/customers/bulk', this.CustomersMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/customers/bulk', this.CustomersMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/customers/:id', this.CustomersMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/customers/:id', this.CustomersMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/customers/:id', this.CustomersMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/customers/:id/exists', this.CustomersMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CustomersRouter;