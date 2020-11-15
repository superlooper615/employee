const {
  BaseRouter
} = require('xc-core');

class ScheduleHmBoatstatusscheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ScheduleMiddleware = app.$middlewares.primary.ScheduleMiddleware;
    this.ScheduleHmBoatstatusscheduleService = app.$services.primary.ScheduleHmBoatstatusscheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ScheduleHmBoatstatusscheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ScheduleHmBoatstatusscheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/schedule*",this.ScheduleMiddleware.default)

    router.get('/api/v1/schedule/has/boatstatusschedule', this.ScheduleMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/schedule/:parentId/boatstatusschedule', this.ScheduleMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/schedule/:parentId/boatstatusschedule', this.ScheduleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/schedule/:parentId/boatstatusschedule/findOne', this.ScheduleMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/schedule/:parentId/boatstatusschedule/groupby/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/schedule/:parentId/boatstatusschedule/distribution/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/schedule/:parentId/boatstatusschedule/distinct/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/schedule/:parentId/boatstatusschedule/aggregate/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/schedule/:parentId/boatstatusschedule/count', this.ScheduleMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/schedule/:parentId/boatstatusschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/schedule/:parentId/boatstatusschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/schedule/:parentId/boatstatusschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/schedule/:parentId/boatstatusschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/schedule/:parentId/boatstatusschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/schedule/:parentId/boatstatusschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/schedule/:parentId/boatstatusschedule/:id/exists', this.ScheduleMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ScheduleHmBoatstatusscheduleRouter;