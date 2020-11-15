const {
  BaseRouter
} = require('xc-core');

class CustomerHmBoatrentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
    this.CustomerHmBoatrentalService = app.$services.primary.CustomerHmBoatrentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CustomerHmBoatrentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CustomerHmBoatrentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CustomerHmBoatrentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CustomerHmBoatrentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CustomerHmBoatrentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CustomerHmBoatrentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CustomerHmBoatrentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CustomerHmBoatrentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CustomerHmBoatrentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CustomerHmBoatrentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/customer*",this.CustomerMiddleware.default)

    router.get('/api/v1/customer/has/boatrental', this.CustomerMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/customer/:parentId/boatrental', this.CustomerMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/customer/:parentId/boatrental', this.CustomerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/customer/:parentId/boatrental/findOne', this.CustomerMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/customer/:parentId/boatrental/groupby/:columnName',this.CustomerMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/customer/:parentId/boatrental/distribution/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/customer/:parentId/boatrental/distinct/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/customer/:parentId/boatrental/aggregate/:columnName',this.CustomerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/customer/:parentId/boatrental/count', this.CustomerMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/customer/:parentId/boatrental/bulk',this.CustomerMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/customer/:parentId/boatrental/bulk',this.CustomerMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/customer/:parentId/boatrental/bulk',this.CustomerMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/customer/:parentId/boatrental/:id', this.CustomerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/customer/:parentId/boatrental/:id', this.CustomerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/customer/:parentId/boatrental/:id', this.CustomerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/customer/:parentId/boatrental/:id/exists', this.CustomerMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CustomerHmBoatrentalRouter;