const {
  BaseService
} = require('xc-core');

class ScheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.schedule = app.$dbs.primary.schedule;
  }

  async create(req, res) {
    let data = await this.schedule.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.schedule.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.schedule.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.schedule.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.schedule.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.schedule.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.schedule.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.schedule.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.schedule.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.schedule.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.schedule.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.schedule.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.schedule.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.schedule.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.schedule.delb(req.body);
    return data;
  }

}

module.exports = ScheduleService;