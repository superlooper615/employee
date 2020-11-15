const {
  BaseRouter
} = require('xc-core');

class UseraccountBtEmployeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UseraccountMiddleware = app.$middlewares.primary.UseraccountMiddleware;
    this.UseraccountBtEmployeeService = app.$services.primary.UseraccountBtEmployeeService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.UseraccountBtEmployeeService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/useraccount*",this.UseraccountMiddleware.default)
    router.get('/api/v1/useraccount/belongs/:parents', this.UseraccountMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = UseraccountBtEmployeeRouter;