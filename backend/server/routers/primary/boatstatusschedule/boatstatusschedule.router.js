const {
  BaseRouter
} = require('xc-core');

class BoatstatusscheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatstatusscheduleService = app.$services.primary.BoatstatusscheduleService;
    this.BoatstatusscheduleMiddleware = app.$middlewares.primary.BoatstatusscheduleMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoatstatusscheduleService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoatstatusscheduleService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoatstatusscheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatstatusscheduleService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatstatusscheduleService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatstatusscheduleService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatstatusscheduleService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoatstatusscheduleService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoatstatusscheduleService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoatstatusscheduleService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoatstatusscheduleService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoatstatusscheduleService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoatstatusscheduleService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoatstatusscheduleService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoatstatusscheduleService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/boatstatusschedule*",this.BoatstatusscheduleMiddleware.default)

    router.get('/api/v1/boatstatusschedule', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/boatstatusschedule', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatstatusschedule/findOne', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/boatstatusschedule/groupby/:columnName', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/boatstatusschedule/distribution/:columnName', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/boatstatusschedule/distinct/:columnName', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/boatstatusschedule/aggregate/:columnName', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatstatusschedule/count', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/boatstatusschedule/bulk', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/boatstatusschedule/bulk', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/boatstatusschedule/bulk', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/boatstatusschedule/:id', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatstatusschedule/:id', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatstatusschedule/:id', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatstatusschedule/:id/exists', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoatstatusscheduleRouter;