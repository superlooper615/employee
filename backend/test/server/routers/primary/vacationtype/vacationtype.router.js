const {
  BaseRouter
} = require('xc-core');

class VacationtypeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VacationtypeService = app.$services.primary.VacationtypeService;
    this.VacationtypeMiddleware = app.$middlewares.primary.VacationtypeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.VacationtypeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.VacationtypeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.VacationtypeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.VacationtypeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.VacationtypeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.VacationtypeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.VacationtypeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.VacationtypeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.VacationtypeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.VacationtypeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.VacationtypeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.VacationtypeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.VacationtypeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.VacationtypeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.VacationtypeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/vacationtype*",this.VacationtypeMiddleware.default)

    router.get('/api/v1/vacationtype', this.VacationtypeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/vacationtype', this.VacationtypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/vacationtype/findOne', this.VacationtypeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/vacationtype/groupby/:columnName', this.VacationtypeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/vacationtype/distribution/:columnName', this.VacationtypeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/vacationtype/distinct/:columnName', this.VacationtypeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/vacationtype/aggregate/:columnName', this.VacationtypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/vacationtype/count', this.VacationtypeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/vacationtype/bulk', this.VacationtypeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/vacationtype/bulk', this.VacationtypeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/vacationtype/bulk', this.VacationtypeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/vacationtype/:id', this.VacationtypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/vacationtype/:id', this.VacationtypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/vacationtype/:id', this.VacationtypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/vacationtype/:id/exists', this.VacationtypeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = VacationtypeRouter;