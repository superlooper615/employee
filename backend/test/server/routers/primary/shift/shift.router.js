const {
  BaseRouter
} = require('xc-core');

class ShiftRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ShiftService = app.$services.primary.ShiftService;
    this.ShiftMiddleware = app.$middlewares.primary.ShiftMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ShiftService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ShiftService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ShiftService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ShiftService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ShiftService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ShiftService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ShiftService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ShiftService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ShiftService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ShiftService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ShiftService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ShiftService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ShiftService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ShiftService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ShiftService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/shift*",this.ShiftMiddleware.default)

    router.get('/api/v1/shift', this.ShiftMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/shift', this.ShiftMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/shift/findOne', this.ShiftMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/shift/groupby/:columnName', this.ShiftMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/shift/distribution/:columnName', this.ShiftMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/shift/distinct/:columnName', this.ShiftMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/shift/aggregate/:columnName', this.ShiftMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/shift/count', this.ShiftMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/shift/bulk', this.ShiftMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/shift/bulk', this.ShiftMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/shift/bulk', this.ShiftMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/shift/:id', this.ShiftMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/shift/:id', this.ShiftMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/shift/:id', this.ShiftMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/shift/:id/exists', this.ShiftMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ShiftRouter;