const {
  BaseRouter
} = require('xc-core');

class EmployeeHmBoatrentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this.EmployeeHmBoatrentalService = app.$services.primary.EmployeeHmBoatrentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('EmployeeHmBoatrentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.EmployeeHmBoatrentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.EmployeeHmBoatrentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.EmployeeHmBoatrentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.EmployeeHmBoatrentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.EmployeeHmBoatrentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.EmployeeHmBoatrentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.EmployeeHmBoatrentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.EmployeeHmBoatrentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.EmployeeHmBoatrentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)

    router.get('/api/v1/employee/has/boatrental', this.EmployeeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/employee/:parentId/boatrental', this.EmployeeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/employee/:parentId/boatrental', this.EmployeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/employee/:parentId/boatrental/findOne', this.EmployeeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/employee/:parentId/boatrental/groupby/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/employee/:parentId/boatrental/distribution/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/employee/:parentId/boatrental/distinct/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/employee/:parentId/boatrental/aggregate/:columnName',this.EmployeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/employee/:parentId/boatrental/count', this.EmployeeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/employee/:parentId/boatrental/bulk',this.EmployeeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/employee/:parentId/boatrental/bulk',this.EmployeeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/employee/:parentId/boatrental/bulk',this.EmployeeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/employee/:parentId/boatrental/:id', this.EmployeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/employee/:parentId/boatrental/:id', this.EmployeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/employee/:parentId/boatrental/:id', this.EmployeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/employee/:parentId/boatrental/:id/exists', this.EmployeeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = EmployeeHmBoatrentalRouter;