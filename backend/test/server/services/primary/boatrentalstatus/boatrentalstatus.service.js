const {
  BaseService
} = require('xc-core');

class BoatrentalstatusService extends BaseService {

  constructor(app) {
    super(app);
    this.boatrentalstatus = app.$dbs.primary.boatrentalstatus;
  }

  async create(req, res) {
    let data = await this.boatrentalstatus.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.boatrentalstatus.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.boatrentalstatus.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.boatrentalstatus.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.boatrentalstatus.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.boatrentalstatus.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.boatrentalstatus.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.boatrentalstatus.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.boatrentalstatus.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.boatrentalstatus.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.boatrentalstatus.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.boatrentalstatus.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.boatrentalstatus.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.boatrentalstatus.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.boatrentalstatus.delb(req.body);
    return data;
  }

}

module.exports = BoatrentalstatusService;