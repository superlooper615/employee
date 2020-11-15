const {
  BaseRouter
} = require('xc-core');

class EmployeescheduleBtEmployeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeescheduleMiddleware = app.$middlewares.primary.EmployeescheduleMiddleware;
    this.EmployeescheduleBtEmployeeService = app.$services.primary.EmployeescheduleBtEmployeeService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.EmployeescheduleBtEmployeeService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/employeeschedule*",this.EmployeescheduleMiddleware.default)
    router.get('/api/v1/employeeschedule/belongs/:parents', this.EmployeescheduleMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = EmployeescheduleBtEmployeeRouter;