const {
  BaseRouter
} = require('xc-core');

class EmployeetypeHmEmployeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeetypeMiddleware = app.$middlewares.primary.EmployeetypeMiddleware;
    this.EmployeetypeHmEmployeeService = app.$services.primary.EmployeetypeHmEmployeeService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeetypeHmEmployeeRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeetypeHmEmployeeService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employeetype*",this.EmployeetypeMiddleware.default)

    router.get('/api/v1/employeetype/has/employee', this.EmployeetypeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employeetype/:parentId/employee', this.EmployeetypeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employeetype/:parentId/employee', this.EmployeetypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employeetype/:parentId/employee/findOne', this.EmployeetypeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employeetype/:parentId/employee/groupby/:columnName',this.EmployeetypeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employeetype/:parentId/employee/distribution/:columnName',this.EmployeetypeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employeetype/:parentId/employee/distinct/:columnName',this.EmployeetypeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employeetype/:parentId/employee/aggregate/:columnName',this.EmployeetypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employeetype/:parentId/employee/count', this.EmployeetypeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employeetype/:parentId/employee/bulk',this.EmployeetypeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employeetype/:parentId/employee/bulk',this.EmployeetypeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employeetype/:parentId/employee/bulk',this.EmployeetypeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employeetype/:parentId/employee/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employeetype/:parentId/employee/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employeetype/:parentId/employee/:id', this.EmployeetypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employeetype/:parentId/employee/:id/exists', this.EmployeetypeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeetypeHmEmployeeRouter;