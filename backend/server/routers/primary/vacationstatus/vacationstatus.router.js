const {
  BaseRouter
} = require('xc-core');

class VacationstatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VacationstatusService = app.$services.primary.VacationstatusService;
    this.VacationstatusMiddleware = app.$middlewares.primary.VacationstatusMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.VacationstatusService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.VacationstatusService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.VacationstatusService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.VacationstatusService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.VacationstatusService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.VacationstatusService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.VacationstatusService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.VacationstatusService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.VacationstatusService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.VacationstatusService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.VacationstatusService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.VacationstatusService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.VacationstatusService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.VacationstatusService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.VacationstatusService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/vacationstatus*",this.VacationstatusMiddleware.default)

    router.get('/api/v1/vacationstatus', this.VacationstatusMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/vacationstatus', this.VacationstatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/vacationstatus/findOne', this.VacationstatusMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/vacationstatus/groupby/:columnName', this.VacationstatusMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/vacationstatus/distribution/:columnName', this.VacationstatusMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/vacationstatus/distinct/:columnName', this.VacationstatusMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/vacationstatus/aggregate/:columnName', this.VacationstatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/vacationstatus/count', this.VacationstatusMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/vacationstatus/bulk', this.VacationstatusMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/vacationstatus/bulk', this.VacationstatusMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/vacationstatus/bulk', this.VacationstatusMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/vacationstatus/:id', this.VacationstatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/vacationstatus/:id', this.VacationstatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/vacationstatus/:id', this.VacationstatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/vacationstatus/:id/exists', this.VacationstatusMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = VacationstatusRouter;