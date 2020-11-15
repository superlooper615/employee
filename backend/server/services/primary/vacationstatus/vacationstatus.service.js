const {
  BaseService
} = require('xc-core');

class VacationstatusService extends BaseService {

  constructor(app) {
    super(app);
    this.vacationstatus = app.$dbs.primary.vacationstatus;
  }

  async create(req, res) {
    let data = await this.vacationstatus.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.vacationstatus.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.vacationstatus.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.vacationstatus.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.vacationstatus.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.vacationstatus.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.vacationstatus.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.vacationstatus.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.vacationstatus.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.vacationstatus.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.vacationstatus.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.vacationstatus.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.vacationstatus.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.vacationstatus.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.vacationstatus.delb(req.body);
    return data;
  }

}

module.exports = VacationstatusService;