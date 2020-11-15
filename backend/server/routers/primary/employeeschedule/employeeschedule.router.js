const {
  BaseRouter
} = require('xc-core');

class EmployeescheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeescheduleService = app.$services.primary.EmployeescheduleService;
    this.EmployeescheduleMiddleware = app.$middlewares.primary.EmployeescheduleMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.EmployeescheduleService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.EmployeescheduleService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.EmployeescheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeescheduleService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeescheduleService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeescheduleService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeescheduleService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.EmployeescheduleService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.EmployeescheduleService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.EmployeescheduleService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.EmployeescheduleService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.EmployeescheduleService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.EmployeescheduleService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.EmployeescheduleService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.EmployeescheduleService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/employeeschedule*",this.EmployeescheduleMiddleware.default)

    router.get('/api/v1/employeeschedule', this.EmployeescheduleMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/employeeschedule', this.EmployeescheduleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employeeschedule/findOne', this.EmployeescheduleMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/employeeschedule/groupby/:columnName', this.EmployeescheduleMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/employeeschedule/distribution/:columnName', this.EmployeescheduleMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/employeeschedule/distinct/:columnName', this.EmployeescheduleMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/employeeschedule/aggregate/:columnName', this.EmployeescheduleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employeeschedule/count', this.EmployeescheduleMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/employeeschedule/bulk', this.EmployeescheduleMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/employeeschedule/bulk', this.EmployeescheduleMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/employeeschedule/bulk', this.EmployeescheduleMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/employeeschedule/:id', this.EmployeescheduleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employeeschedule/:id', this.EmployeescheduleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employeeschedule/:id', this.EmployeescheduleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employeeschedule/:id/exists', this.EmployeescheduleMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = EmployeescheduleRouter;