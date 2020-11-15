const {
  BaseRouter
} = require('xc-core');

class EmployeeHmVacationRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this.EmployeeHmVacationService = app.$services.primary.EmployeeHmVacationService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeeHmVacationRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeeHmVacationService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeeHmVacationService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeeHmVacationService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeeHmVacationService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeeHmVacationService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeeHmVacationService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeeHmVacationService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeeHmVacationService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeeHmVacationService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)

    router.get('/api/v1/employee/has/vacation', this.EmployeeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employee/:parentId/vacation', this.EmployeeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employee/:parentId/vacation', this.EmployeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employee/:parentId/vacation/findOne', this.EmployeeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employee/:parentId/vacation/groupby/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employee/:parentId/vacation/distribution/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employee/:parentId/vacation/distinct/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employee/:parentId/vacation/aggregate/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employee/:parentId/vacation/count', this.EmployeeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employee/:parentId/vacation/bulk',this.EmployeeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employee/:parentId/vacation/bulk',this.EmployeeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employee/:parentId/vacation/bulk',this.EmployeeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employee/:parentId/vacation/:id', this.EmployeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employee/:parentId/vacation/:id', this.EmployeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employee/:parentId/vacation/:id', this.EmployeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employee/:parentId/vacation/:id/exists', this.EmployeeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeeHmVacationRouter;