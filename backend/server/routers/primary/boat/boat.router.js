const {
  BaseRouter
} = require('xc-core');

class BoatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatService = app.$services.primary.BoatService;
    this.BoatMiddleware = app.$middlewares.primary.BoatMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoatService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoatService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoatService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoatService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoatService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoatService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoatService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoatService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoatService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoatService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/boat*",this.BoatMiddleware.default)

    router.get('/api/v1/boat', this.BoatMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/boat', this.BoatMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boat/findOne', this.BoatMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/boat/groupby/:columnName', this.BoatMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/boat/distribution/:columnName', this.BoatMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/boat/distinct/:columnName', this.BoatMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/boat/aggregate/:columnName', this.BoatMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boat/count', this.BoatMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/boat/bulk', this.BoatMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/boat/bulk', this.BoatMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/boat/bulk', this.BoatMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/boat/:id', this.BoatMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boat/:id', this.BoatMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boat/:id', this.BoatMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boat/:id/exists', this.BoatMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoatRouter;