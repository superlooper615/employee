const {
  BaseRouter
} = require('xc-core');

class BoatstatusscheduleBtBoatstatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatstatusscheduleMiddleware = app.$middlewares.primary.BoatstatusscheduleMiddleware;
    this.BoatstatusscheduleBtBoatstatusService = app.$services.primary.BoatstatusscheduleBtBoatstatusService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.BoatstatusscheduleBtBoatstatusService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/boatstatusschedule*",this.BoatstatusscheduleMiddleware.default)
    router.get('/api/v1/boatstatusschedule/belongs/:parents', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = BoatstatusscheduleBtBoatstatusRouter;