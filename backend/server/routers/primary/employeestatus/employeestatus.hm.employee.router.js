const {
  BaseRouter
} = require('xc-core');

class EmployeestatusHmEmployeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeestatusMiddleware = app.$middlewares.primary.EmployeestatusMiddleware;
    this.EmployeestatusHmEmployeeService = app.$services.primary.EmployeestatusHmEmployeeService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeestatusHmEmployeeRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeestatusHmEmployeeService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employeestatus*",this.EmployeestatusMiddleware.default)

    router.get('/api/v1/employeestatus/has/employee', this.EmployeestatusMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employeestatus/:parentId/employee', this.EmployeestatusMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employeestatus/:parentId/employee', this.EmployeestatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employeestatus/:parentId/employee/findOne', this.EmployeestatusMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employeestatus/:parentId/employee/groupby/:columnName',this.EmployeestatusMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employeestatus/:parentId/employee/distribution/:columnName',this.EmployeestatusMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employeestatus/:parentId/employee/distinct/:columnName',this.EmployeestatusMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employeestatus/:parentId/employee/aggregate/:columnName',this.EmployeestatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employeestatus/:parentId/employee/count', this.EmployeestatusMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employeestatus/:parentId/employee/bulk',this.EmployeestatusMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employeestatus/:parentId/employee/bulk',this.EmployeestatusMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employeestatus/:parentId/employee/bulk',this.EmployeestatusMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employeestatus/:parentId/employee/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employeestatus/:parentId/employee/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employeestatus/:parentId/employee/:id', this.EmployeestatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employeestatus/:parentId/employee/:id/exists', this.EmployeestatusMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeestatusHmEmployeeRouter;