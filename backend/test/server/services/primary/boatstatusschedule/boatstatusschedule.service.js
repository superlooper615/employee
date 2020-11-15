const {
  BaseService
} = require('xc-core');

class BoatstatusscheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.boatstatusschedule = app.$dbs.primary.boatstatusschedule;
  }

  async create(req, res) {
    let data = await this.boatstatusschedule.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.boatstatusschedule.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.boatstatusschedule.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.boatstatusschedule.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.boatstatusschedule.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.boatstatusschedule.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.boatstatusschedule.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.boatstatusschedule.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.boatstatusschedule.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.boatstatusschedule.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.boatstatusschedule.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.boatstatusschedule.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.boatstatusschedule.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.boatstatusschedule.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.boatstatusschedule.delb(req.body);
    return data;
  }

}

module.exports = BoatstatusscheduleService;