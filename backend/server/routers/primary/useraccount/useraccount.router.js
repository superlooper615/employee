const {
  BaseRouter
} = require('xc-core');

class UseraccountRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UseraccountService = app.$services.primary.UseraccountService;
    this.UseraccountMiddleware = app.$middlewares.primary.UseraccountMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.UseraccountService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.UseraccountService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.UseraccountService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.UseraccountService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.UseraccountService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.UseraccountService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.UseraccountService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.UseraccountService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.UseraccountService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.UseraccountService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.UseraccountService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.UseraccountService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.UseraccountService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.UseraccountService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.UseraccountService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/useraccount*",this.UseraccountMiddleware.default)

    router.get('/api/v1/useraccount', this.UseraccountMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/useraccount', this.UseraccountMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/useraccount/findOne', this.UseraccountMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/useraccount/groupby/:columnName', this.UseraccountMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/useraccount/distribution/:columnName', this.UseraccountMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/useraccount/distinct/:columnName', this.UseraccountMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/useraccount/aggregate/:columnName', this.UseraccountMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/useraccount/count', this.UseraccountMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/useraccount/bulk', this.UseraccountMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/useraccount/bulk', this.UseraccountMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/useraccount/bulk', this.UseraccountMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/useraccount/:id', this.UseraccountMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/useraccount/:id', this.UseraccountMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/useraccount/:id', this.UseraccountMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/useraccount/:id/exists', this.UseraccountMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = UseraccountRouter;