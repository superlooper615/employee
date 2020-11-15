const {
  BaseRouter
} = require('xc-core');

class EmployeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeService = app.$services.primary.EmployeeService;
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.EmployeeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.EmployeeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.EmployeeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.EmployeeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.EmployeeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.EmployeeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.EmployeeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.EmployeeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.EmployeeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.EmployeeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.EmployeeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)

    router.get('/api/v1/employee', this.EmployeeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/employee', this.EmployeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employee/findOne', this.EmployeeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/employee/groupby/:columnName', this.EmployeeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/employee/distribution/:columnName', this.EmployeeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/employee/distinct/:columnName', this.EmployeeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/employee/aggregate/:columnName', this.EmployeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employee/count', this.EmployeeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/employee/bulk', this.EmployeeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/employee/bulk', this.EmployeeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/employee/bulk', this.EmployeeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/employee/:id', this.EmployeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employee/:id', this.EmployeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employee/:id', this.EmployeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employee/:id/exists', this.EmployeeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = EmployeeRouter;