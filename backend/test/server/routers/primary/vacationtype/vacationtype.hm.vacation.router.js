const {
  BaseRouter
} = require('xc-core');

class VacationtypeHmVacationRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VacationtypeMiddleware = app.$middlewares.primary.VacationtypeMiddleware;
    this.VacationtypeHmVacationService = app.$services.primary.VacationtypeHmVacationService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('VacationtypeHmVacationRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.VacationtypeHmVacationService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.VacationtypeHmVacationService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.VacationtypeHmVacationService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.VacationtypeHmVacationService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.VacationtypeHmVacationService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.VacationtypeHmVacationService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.VacationtypeHmVacationService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.VacationtypeHmVacationService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.VacationtypeHmVacationService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/vacationtype*",this.VacationtypeMiddleware.default)

    router.get('/api/v1/vacationtype/has/vacation', this.VacationtypeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/vacationtype/:parentId/vacation', this.VacationtypeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/vacationtype/:parentId/vacation', this.VacationtypeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/vacationtype/:parentId/vacation/findOne', this.VacationtypeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/vacationtype/:parentId/vacation/groupby/:columnName',this.VacationtypeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/vacationtype/:parentId/vacation/distribution/:columnName',this.VacationtypeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/vacationtype/:parentId/vacation/distinct/:columnName',this.VacationtypeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/vacationtype/:parentId/vacation/aggregate/:columnName',this.VacationtypeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/vacationtype/:parentId/vacation/count', this.VacationtypeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/vacationtype/:parentId/vacation/bulk',this.VacationtypeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/vacationtype/:parentId/vacation/bulk',this.VacationtypeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/vacationtype/:parentId/vacation/bulk',this.VacationtypeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/vacationtype/:parentId/vacation/:id', this.VacationtypeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/vacationtype/:parentId/vacation/:id', this.VacationtypeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/vacationtype/:parentId/vacation/:id', this.VacationtypeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/vacationtype/:parentId/vacation/:id/exists', this.VacationtypeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = VacationtypeHmVacationRouter;