const {
  BaseRouter
} = require('xc-core');

class EmployeeBtEmployeetypeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeeMiddleware = app.$middlewares.primary.EmployeeMiddleware;
    this.EmployeeBtEmployeetypeService = app.$services.primary.EmployeeBtEmployeetypeService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.EmployeeBtEmployeetypeService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/employee*",this.EmployeeMiddleware.default)
    router.get('/api/v1/employee/belongs/:parents', this.EmployeeMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = EmployeeBtEmployeetypeRouter;