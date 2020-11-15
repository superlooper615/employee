const {
  BaseRouter
} = require('xc-core');

class BoatrentalBtCustomerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatrentalMiddleware = app.$middlewares.primary.BoatrentalMiddleware;
    this.BoatrentalBtCustomerService = app.$services.primary.BoatrentalBtCustomerService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.BoatrentalBtCustomerService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/boatrental*",this.BoatrentalMiddleware.default)
    router.get('/api/v1/boatrental/belongs/:parents', this.BoatrentalMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = BoatrentalBtCustomerRouter;