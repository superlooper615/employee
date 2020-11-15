const {
  BaseRouter
} = require('xc-core');

class EmployeestatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeestatusService = app.$services.primary.EmployeestatusService;
    this.EmployeestatusMiddleware = app.$middlewares.primary.EmployeestatusMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.EmployeestatusService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.EmployeestatusService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.EmployeestatusService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeestatusService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeestatusService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeestatusService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeestatusService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.EmployeestatusService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.EmployeestatusService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.EmployeestatusService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.EmployeestatusService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.EmployeestatusService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.EmployeestatusService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.EmployeestatusService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.EmployeestatusService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/employeestatus*",this.EmployeestatusMiddleware.default)

    router.get('/api/v1/employeestatus', this.EmployeestatusMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/employeestatus', this.EmployeestatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employeestatus/findOne', this.EmployeestatusMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/employeestatus/groupby/:columnName', this.EmployeestatusMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/employeestatus/distribution/:columnName', this.EmployeestatusMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/employeestatus/distinct/:columnName', this.EmployeestatusMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/employeestatus/aggregate/:columnName', this.EmployeestatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employeestatus/count', this.EmployeestatusMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/employeestatus/bulk', this.EmployeestatusMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/employeestatus/bulk', this.EmployeestatusMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/employeestatus/bulk', this.EmployeestatusMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/employeestatus/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employeestatus/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employeestatus/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employeestatus/:id/exists', this.EmployeestatusMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = EmployeestatusRouter;