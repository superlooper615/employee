const {
  BaseRouter
} = require('xc-core');

class EmployeeHmUseraccountRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this.EmployeeHmUseraccountService = app.$services.primary.EmployeeHmUseraccountService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeeHmUseraccountRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeeHmUseraccountService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeeHmUseraccountService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeeHmUseraccountService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeeHmUseraccountService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeeHmUseraccountService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeeHmUseraccountService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeeHmUseraccountService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeeHmUseraccountService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeeHmUseraccountService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)

    router.get('/api/v1/employee/has/useraccount', this.EmployeeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employee/:parentId/useraccount', this.EmployeeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employee/:parentId/useraccount', this.EmployeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employee/:parentId/useraccount/findOne', this.EmployeeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employee/:parentId/useraccount/groupby/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employee/:parentId/useraccount/distribution/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employee/:parentId/useraccount/distinct/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employee/:parentId/useraccount/aggregate/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employee/:parentId/useraccount/count', this.EmployeeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employee/:parentId/useraccount/bulk',this.EmployeeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employee/:parentId/useraccount/bulk',this.EmployeeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employee/:parentId/useraccount/bulk',this.EmployeeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employee/:parentId/useraccount/:id', this.EmployeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employee/:parentId/useraccount/:id', this.EmployeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employee/:parentId/useraccount/:id', this.EmployeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employee/:parentId/useraccount/:id/exists', this.EmployeeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeeHmUseraccountRouter;