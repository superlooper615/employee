const {
  BaseRouter
} = require('xc-core');

class BoatstatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatstatusService = app.$services.primary.BoatstatusService;
    this.BoatstatusMiddleware = app.$middlewares.primary.BoatstatusMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoatstatusService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoatstatusService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoatstatusService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatstatusService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatstatusService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatstatusService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatstatusService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoatstatusService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoatstatusService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoatstatusService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoatstatusService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoatstatusService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoatstatusService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoatstatusService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoatstatusService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/boatstatus*",this.BoatstatusMiddleware.default)

    router.get('/api/v1/boatstatus', this.BoatstatusMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/boatstatus', this.BoatstatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatstatus/findOne', this.BoatstatusMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/boatstatus/groupby/:columnName', this.BoatstatusMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/boatstatus/distribution/:columnName', this.BoatstatusMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/boatstatus/distinct/:columnName', this.BoatstatusMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/boatstatus/aggregate/:columnName', this.BoatstatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatstatus/count', this.BoatstatusMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/boatstatus/bulk', this.BoatstatusMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/boatstatus/bulk', this.BoatstatusMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/boatstatus/bulk', this.BoatstatusMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/boatstatus/:id', this.BoatstatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatstatus/:id', this.BoatstatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatstatus/:id', this.BoatstatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatstatus/:id/exists', this.BoatstatusMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoatstatusRouter;