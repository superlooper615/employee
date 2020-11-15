const {
  BaseRouter
} = require('xc-core');

class VacationBtVacationstatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VacationMiddleware = app.$middlewares.primary.VacationMiddleware;
    this.VacationBtVacationstatusService = app.$services.primary.VacationBtVacationstatusService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.VacationBtVacationstatusService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/vacation*",this.VacationMiddleware.default)
    router.get('/api/v1/vacation/belongs/:parents', this.VacationMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = VacationBtVacationstatusRouter;