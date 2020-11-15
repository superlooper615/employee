const {
  BaseService
} = require('xc-core');

class VacationtypeService extends BaseService {

  constructor(app) {
    super(app);
    this.vacationtype = app.$dbs.primary.vacationtype;
  }

  async create(req, res) {
    let data = await this.vacationtype.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.vacationtype.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.vacationtype.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.vacationtype.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.vacationtype.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.vacationtype.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.vacationtype.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.vacationtype.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.vacationtype.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.vacationtype.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.vacationtype.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.vacationtype.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.vacationtype.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.vacationtype.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.vacationtype.delb(req.body);
    return data;
  }

}

module.exports = VacationtypeService;