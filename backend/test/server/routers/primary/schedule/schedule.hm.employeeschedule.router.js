const {
  BaseRouter
} = require('xc-core');

class ScheduleHmEmployeescheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ScheduleMiddleware = app.$middlewares.primary.ScheduleMiddleware;
    this.ScheduleHmEmployeescheduleService = app.$services.primary.ScheduleHmEmployeescheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ScheduleHmEmployeescheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ScheduleHmEmployeescheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/schedule*",this.ScheduleMiddleware.default)

    router.get('/api/v1/schedule/has/employeeschedule', this.ScheduleMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/schedule/:parentId/employeeschedule', this.ScheduleMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/schedule/:parentId/employeeschedule', this.ScheduleMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/schedule/:parentId/employeeschedule/findOne', this.ScheduleMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/schedule/:parentId/employeeschedule/groupby/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/schedule/:parentId/employeeschedule/distribution/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/schedule/:parentId/employeeschedule/distinct/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/schedule/:parentId/employeeschedule/aggregate/:columnName',this.ScheduleMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/schedule/:parentId/employeeschedule/count', this.ScheduleMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/schedule/:parentId/employeeschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/schedule/:parentId/employeeschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/schedule/:parentId/employeeschedule/bulk',this.ScheduleMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/schedule/:parentId/employeeschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/schedule/:parentId/employeeschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/schedule/:parentId/employeeschedule/:id', this.ScheduleMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/schedule/:parentId/employeeschedule/:id/exists', this.ScheduleMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ScheduleHmEmployeescheduleRouter;