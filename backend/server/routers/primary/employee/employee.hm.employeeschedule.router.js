const {
  BaseRouter
} = require('xc-core');

class EmployeeHmEmployeescheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this.EmployeeHmEmployeescheduleService = app.$services.primary.EmployeeHmEmployeescheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeeHmEmployeescheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeeHmEmployeescheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)

    router.get('/api/v1/employee/has/employeeschedule', this.EmployeeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employee/:parentId/employeeschedule', this.EmployeeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employee/:parentId/employeeschedule', this.EmployeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employee/:parentId/employeeschedule/findOne', this.EmployeeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employee/:parentId/employeeschedule/groupby/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employee/:parentId/employeeschedule/distribution/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employee/:parentId/employeeschedule/distinct/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employee/:parentId/employeeschedule/aggregate/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employee/:parentId/employeeschedule/count', this.EmployeeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employee/:parentId/employeeschedule/bulk',this.EmployeeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employee/:parentId/employeeschedule/bulk',this.EmployeeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employee/:parentId/employeeschedule/bulk',this.EmployeeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employee/:parentId/employeeschedule/:id', this.EmployeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employee/:parentId/employeeschedule/:id', this.EmployeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employee/:parentId/employeeschedule/:id', this.EmployeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employee/:parentId/employeeschedule/:id/exists', this.EmployeeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeeHmEmployeescheduleRouter;