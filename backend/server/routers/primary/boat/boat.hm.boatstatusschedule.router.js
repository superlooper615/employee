const {
  BaseRouter
} = require('xc-core');

class BoatHmBoatstatusscheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatMiddleware = app.$middlewares.primary.BoatMiddleware;
    this.BoatHmBoatstatusscheduleService = app.$services.primary.BoatHmBoatstatusscheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('BoatHmBoatstatusscheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.BoatHmBoatstatusscheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/boat*",this.BoatMiddleware.default)

    router.get('/api/v1/boat/has/boatstatusschedule', this.BoatMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/boat/:parentId/boatstatusschedule', this.BoatMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/boat/:parentId/boatstatusschedule', this.BoatMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boat/:parentId/boatstatusschedule/findOne', this.BoatMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/boat/:parentId/boatstatusschedule/groupby/:columnName',this.BoatMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/boat/:parentId/boatstatusschedule/distribution/:columnName',this.BoatMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/boat/:parentId/boatstatusschedule/distinct/:columnName',this.BoatMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/boat/:parentId/boatstatusschedule/aggregate/:columnName',this.BoatMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boat/:parentId/boatstatusschedule/count', this.BoatMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/boat/:parentId/boatstatusschedule/bulk',this.BoatMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/boat/:parentId/boatstatusschedule/bulk',this.BoatMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/boat/:parentId/boatstatusschedule/bulk',this.BoatMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/boat/:parentId/boatstatusschedule/:id', this.BoatMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boat/:parentId/boatstatusschedule/:id', this.BoatMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boat/:parentId/boatstatusschedule/:id', this.BoatMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boat/:parentId/boatstatusschedule/:id/exists', this.BoatMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = BoatHmBoatstatusscheduleRouter;