const {
  BaseRouter
} = require('xc-core');

class BoatrentalstatusHmBoatrentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatrentalstatusMiddleware = app.$middlewares.primary.BoatrentalstatusMiddleware;
    this.BoatrentalstatusHmBoatrentalService = app.$services.primary.BoatrentalstatusHmBoatrentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('BoatrentalstatusHmBoatrentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.BoatrentalstatusHmBoatrentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/boatrentalstatus*",this.BoatrentalstatusMiddleware.default)

    router.get('/api/v1/boatrentalstatus/has/boatrental', this.BoatrentalstatusMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/boatrentalstatus/:parentId/boatrental', this.BoatrentalstatusMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/boatrentalstatus/:parentId/boatrental', this.BoatrentalstatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatrentalstatus/:parentId/boatrental/findOne', this.BoatrentalstatusMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/boatrentalstatus/:parentId/boatrental/groupby/:columnName',this.BoatrentalstatusMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/boatrentalstatus/:parentId/boatrental/distribution/:columnName',this.BoatrentalstatusMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/boatrentalstatus/:parentId/boatrental/distinct/:columnName',this.BoatrentalstatusMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/boatrentalstatus/:parentId/boatrental/aggregate/:columnName',this.BoatrentalstatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatrentalstatus/:parentId/boatrental/count', this.BoatrentalstatusMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/boatrentalstatus/:parentId/boatrental/bulk',this.BoatrentalstatusMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/boatrentalstatus/:parentId/boatrental/bulk',this.BoatrentalstatusMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/boatrentalstatus/:parentId/boatrental/bulk',this.BoatrentalstatusMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/boatrentalstatus/:parentId/boatrental/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatrentalstatus/:parentId/boatrental/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatrentalstatus/:parentId/boatrental/:id', this.BoatrentalstatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatrentalstatus/:parentId/boatrental/:id/exists', this.BoatrentalstatusMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = BoatrentalstatusHmBoatrentalRouter;