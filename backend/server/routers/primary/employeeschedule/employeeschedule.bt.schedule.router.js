const {
  BaseRouter
} = require('xc-core');

class EmployeescheduleBtScheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.EmployeescheduleMiddleware = app.$middlewares.primary.EmployeescheduleMiddleware;
    this.EmployeescheduleBtScheduleService = app.$services.primary.EmployeescheduleBtScheduleService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.EmployeescheduleBtScheduleService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/employeeschedule*",this.EmployeescheduleMiddleware.default)
    router.get('/api/v1/employeeschedule/belongs/:parents', this.EmployeescheduleMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = EmployeescheduleBtScheduleRouter;