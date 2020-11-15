const {
  BaseRouter
} = require('xc-core');

class BoatrentalstatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatrentalstatusService = app.$services.primary.BoatrentalstatusService;
    this.BoatrentalstatusMiddleware = app.$middlewares.primary.BoatrentalstatusMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoatrentalstatusService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoatrentalstatusService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoatrentalstatusService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatrentalstatusService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatrentalstatusService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatrentalstatusService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatrentalstatusService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoatrentalstatusService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoatrentalstatusService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoatrentalstatusService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoatrentalstatusService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoatrentalstatusService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoatrentalstatusService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoatrentalstatusService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoatrentalstatusService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/boatrentalstatus*",this.BoatrentalstatusMiddleware.default)

    router.get('/api/v1/boatrentalstatus', this.BoatrentalstatusMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/boatrentalstatus', this.BoatrentalstatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatrentalstatus/findOne', this.BoatrentalstatusMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/boatrentalstatus/groupby/:columnName', this.BoatrentalstatusMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/boatrentalstatus/distribution/:columnName', this.BoatrentalstatusMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/boatrentalstatus/distinct/:columnName', this.BoatrentalstatusMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/boatrentalstatus/aggregate/:columnName', this.BoatrentalstatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatrentalstatus/count', this.BoatrentalstatusMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/boatrentalstatus/bulk', this.BoatrentalstatusMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/boatrentalstatus/bulk', this.BoatrentalstatusMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/boatrentalstatus/bulk', this.BoatrentalstatusMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/boatrentalstatus/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatrentalstatus/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatrentalstatus/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatrentalstatus/:id/exists', this.BoatrentalstatusMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoatrentalstatusRouter;