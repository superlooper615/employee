const {
  BaseRouter
} = require('xc-core');

class ScheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ScheduleService = app.$services.primary.ScheduleService;
    this.ScheduleMiddleware = app.$middlewares.primary.ScheduleMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ScheduleService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ScheduleService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ScheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ScheduleService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ScheduleService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ScheduleService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ScheduleService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ScheduleService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ScheduleService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ScheduleService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ScheduleService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ScheduleService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ScheduleService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ScheduleService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ScheduleService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/schedule*",this.ScheduleMiddleware.default)

    router.get('/api/v1/schedule', this.ScheduleMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/schedule', this.ScheduleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/schedule/findOne', this.ScheduleMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/schedule/groupby/:columnName', this.ScheduleMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/schedule/distribution/:columnName', this.ScheduleMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/schedule/distinct/:columnName', this.ScheduleMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/schedule/aggregate/:columnName', this.ScheduleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/schedule/count', this.ScheduleMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/schedule/bulk', this.ScheduleMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/schedule/bulk', this.ScheduleMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/schedule/bulk', this.ScheduleMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/schedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/schedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/schedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/schedule/:id/exists', this.ScheduleMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ScheduleRouter;