const {
  BaseService
} = require('xc-core');

class VacationService extends BaseService {

  constructor(app) {
    super(app);
    this.vacation = app.$dbs.primary.vacation;
  }

  async create(req, res) {
    let data = await this.vacation.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.vacation.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.vacation.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.vacation.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.vacation.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.vacation.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.vacation.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.vacation.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.vacation.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.vacation.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.vacation.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.vacation.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.vacation.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.vacation.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.vacation.delb(req.body);
    return data;
  }

}

module.exports = VacationService;