const {
  BaseRouter
} = require('xc-core');

class BoatstatusscheduleBtBoatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatstatusscheduleMiddleware = app.$middlewares.primary.BoatstatusscheduleMiddleware;
    this.BoatstatusscheduleBtBoatService = app.$services.primary.BoatstatusscheduleBtBoatService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.BoatstatusscheduleBtBoatService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/boatstatusschedule*",this.BoatstatusscheduleMiddleware.default)
    router.get('/api/v1/boatstatusschedule/belongs/:parents', this.BoatstatusscheduleMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = BoatstatusscheduleBtBoatRouter;