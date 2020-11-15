const {
  BaseRouter
} = require('xc-core');

class BoatHmBoatrentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatMiddleware = app.$middlewares.primary.BoatMiddleware;
    this.BoatHmBoatrentalService = app.$services.primary.BoatHmBoatrentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('BoatHmBoatrentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.BoatHmBoatrentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatHmBoatrentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.BoatHmBoatrentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatHmBoatrentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.BoatHmBoatrentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatHmBoatrentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatHmBoatrentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.BoatHmBoatrentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.BoatHmBoatrentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/boat*",this.BoatMiddleware.default)

    router.get('/api/v1/boat/has/boatrental', this.BoatMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/boat/:parentId/boatrental', this.BoatMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/boat/:parentId/boatrental', this.BoatMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boat/:parentId/boatrental/findOne', this.BoatMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/boat/:parentId/boatrental/groupby/:columnName',this.BoatMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/boat/:parentId/boatrental/distribution/:columnName',this.BoatMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/boat/:parentId/boatrental/distinct/:columnName',this.BoatMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/boat/:parentId/boatrental/aggregate/:columnName',this.BoatMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boat/:parentId/boatrental/count', this.BoatMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/boat/:parentId/boatrental/bulk',this.BoatMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/boat/:parentId/boatrental/bulk',this.BoatMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/boat/:parentId/boatrental/bulk',this.BoatMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/boat/:parentId/boatrental/:id', this.BoatMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boat/:parentId/boatrental/:id', this.BoatMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boat/:parentId/boatrental/:id', this.BoatMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boat/:parentId/boatrental/:id/exists', this.BoatMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = BoatHmBoatrentalRouter;