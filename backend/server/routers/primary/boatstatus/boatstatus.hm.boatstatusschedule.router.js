const {
  BaseRouter
} = require('xc-core');

class BoatstatusHmBoatstatusscheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatstatusMiddleware = app.$middlewares.primary.BoatstatusMiddleware;
    this.BoatstatusHmBoatstatusscheduleService = app.$services.primary.BoatstatusHmBoatstatusscheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('BoatstatusHmBoatstatusscheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.BoatstatusHmBoatstatusscheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/boatstatus*",this.BoatstatusMiddleware.default)

    router.get('/api/v1/boatstatus/has/boatstatusschedule', this.BoatstatusMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/boatstatus/:parentId/boatstatusschedule', this.BoatstatusMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/boatstatus/:parentId/boatstatusschedule', this.BoatstatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/findOne', this.BoatstatusMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/groupby/:columnName',this.BoatstatusMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/distribution/:columnName',this.BoatstatusMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/distinct/:columnName',this.BoatstatusMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/aggregate/:columnName',this.BoatstatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/count', this.BoatstatusMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/boatstatus/:parentId/boatstatusschedule/bulk',this.BoatstatusMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/boatstatus/:parentId/boatstatusschedule/bulk',this.BoatstatusMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/boatstatus/:parentId/boatstatusschedule/bulk',this.BoatstatusMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/:id', this.BoatstatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatstatus/:parentId/boatstatusschedule/:id', this.BoatstatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatstatus/:parentId/boatstatusschedule/:id', this.BoatstatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatstatus/:parentId/boatstatusschedule/:id/exists', this.BoatstatusMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = BoatstatusHmBoatstatusscheduleRouter;