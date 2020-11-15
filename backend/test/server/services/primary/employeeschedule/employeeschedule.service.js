const {
  BaseService
} = require('xc-core');

class EmployeescheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.employeeschedule = app.$dbs.primary.employeeschedule;
  }

  async create(req, res) {
    let data = await this.employeeschedule.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.employeeschedule.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.employeeschedule.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.employeeschedule.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.employeeschedule.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.employeeschedule.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.employeeschedule.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.employeeschedule.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.employeeschedule.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.employeeschedule.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.employeeschedule.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.employeeschedule.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.employeeschedule.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.employeeschedule.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.employeeschedule.delb(req.body);
    return data;
  }

}

module.exports = EmployeescheduleService;