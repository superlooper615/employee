const {
  BaseRouter
} = require('xc-core');

class ShiftHmScheduleRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ShiftMiddleware = app.$middlewares.primary.ShiftMiddleware;
    this.ShiftHmScheduleService = app.$services.primary.ShiftHmScheduleService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ShiftHmScheduleRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ShiftHmScheduleService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ShiftHmScheduleService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ShiftHmScheduleService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ShiftHmScheduleService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ShiftHmScheduleService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ShiftHmScheduleService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ShiftHmScheduleService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ShiftHmScheduleService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ShiftHmScheduleService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/shift*",this.ShiftMiddleware.default)

    router.get('/api/v1/shift/has/schedule', this.ShiftMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/shift/:parentId/schedule', this.ShiftMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/shift/:parentId/schedule', this.ShiftMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/shift/:parentId/schedule/findOne', this.ShiftMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/shift/:parentId/schedule/groupby/:columnName',this.ShiftMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/shift/:parentId/schedule/distribution/:columnName',this.ShiftMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/shift/:parentId/schedule/distinct/:columnName',this.ShiftMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/shift/:parentId/schedule/aggregate/:columnName',this.ShiftMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/shift/:parentId/schedule/count', this.ShiftMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/shift/:parentId/schedule/bulk',this.ShiftMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/shift/:parentId/schedule/bulk',this.ShiftMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/shift/:parentId/schedule/bulk',this.ShiftMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/shift/:parentId/schedule/:id', this.ShiftMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/shift/:parentId/schedule/:id', this.ShiftMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/shift/:parentId/schedule/:id', this.ShiftMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/shift/:parentId/schedule/:id/exists', this.ShiftMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ShiftHmScheduleRouter;