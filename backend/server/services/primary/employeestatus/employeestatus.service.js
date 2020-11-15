const {
  BaseService
} = require('xc-core');

class EmployeestatusService extends BaseService {

  constructor(app) {
    super(app);
    this.employeestatus = app.$dbs.primary.employeestatus;
  }

  async create(req, res) {
    let data = await this.employeestatus.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.employeestatus.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.employeestatus.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.employeestatus.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.employeestatus.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.employeestatus.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.employeestatus.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.employeestatus.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.employeestatus.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.employeestatus.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.employeestatus.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.employeestatus.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.employeestatus.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.employeestatus.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.employeestatus.delb(req.body);
    return data;
  }

}

module.exports = EmployeestatusService;