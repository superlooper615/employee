const {
  BaseRouter
} = require('xc-core');

class ScheduleBtShiftRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ScheduleMiddleware = app.$middlewares.primary.ScheduleMiddleware;
    this.ScheduleBtShiftService = app.$services.primary.ScheduleBtShiftService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ScheduleBtShiftService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/schedule*",this.ScheduleMiddleware.default)
    router.get('/api/v1/schedule/belongs/:parents', this.ScheduleMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ScheduleBtShiftRouter;