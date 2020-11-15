const {
  BaseRouter
} = require('xc-core');

class BoatrentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BoatrentalService = app.$services.primary.BoatrentalService;
    this.BoatrentalMiddleware = app.$middlewares.primary.BoatrentalMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BoatrentalService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BoatrentalService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BoatrentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BoatrentalService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BoatrentalService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BoatrentalService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BoatrentalService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BoatrentalService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BoatrentalService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BoatrentalService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BoatrentalService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BoatrentalService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BoatrentalService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BoatrentalService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BoatrentalService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/boatrental*",this.BoatrentalMiddleware.default)

    router.get('/api/v1/boatrental', this.BoatrentalMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/boatrental', this.BoatrentalMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/boatrental/findOne', this.BoatrentalMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/boatrental/groupby/:columnName', this.BoatrentalMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/boatrental/distribution/:columnName', this.BoatrentalMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/boatrental/distinct/:columnName', this.BoatrentalMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/boatrental/aggregate/:columnName', this.BoatrentalMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/boatrental/count', this.BoatrentalMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/boatrental/bulk', this.BoatrentalMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/boatrental/bulk', this.BoatrentalMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/boatrental/bulk', this.BoatrentalMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/boatrental/:id', this.BoatrentalMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/boatrental/:id', this.BoatrentalMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/boatrental/:id', this.BoatrentalMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/boatrental/:id/exists', this.BoatrentalMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BoatrentalRouter;