const {
  BaseRouter
} = require('xc-core');

class VacationRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VacationService = app.$services.primary.VacationService;
    this.VacationMiddleware = app.$middlewares.primary.VacationMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.VacationService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.VacationService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.VacationService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.VacationService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.VacationService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.VacationService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.VacationService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.VacationService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.VacationService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.VacationService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.VacationService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.VacationService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.VacationService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.VacationService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.VacationService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/vacation*",this.VacationMiddleware.default)

    router.get('/api/v1/vacation', this.VacationMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/vacation', this.VacationMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/vacation/findOne', this.VacationMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/vacation/groupby/:columnName', this.VacationMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/vacation/distribution/:columnName', this.VacationMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/vacation/distinct/:columnName', this.VacationMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/vacation/aggregate/:columnName', this.VacationMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/vacation/count', this.VacationMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/vacation/bulk', this.VacationMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/vacation/bulk', this.VacationMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/vacation/bulk', this.VacationMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/vacation/:id', this.VacationMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/vacation/:id', this.VacationMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/vacation/:id', this.VacationMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/vacation/:id/exists', this.VacationMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = VacationRouter;