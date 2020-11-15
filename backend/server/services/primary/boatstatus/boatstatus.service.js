const {
  BaseService
} = require('xc-core');

class BoatstatusService extends BaseService {

  constructor(app) {
    super(app);
    this.boatstatus = app.$dbs.primary.boatstatus;
  }

  async create(req, res) {
    let data = await this.boatstatus.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.boatstatus.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.boatstatus.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.boatstatus.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.boatstatus.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.boatstatus.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.boatstatus.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.boatstatus.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.boatstatus.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.boatstatus.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.boatstatus.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.boatstatus.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.boatstatus.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.boatstatus.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.boatstatus.delb(req.body);
    return data;
  }

}

module.exports = BoatstatusService;