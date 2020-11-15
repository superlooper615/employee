const {
  BaseService
} = require('xc-core');

class EmployeeService extends BaseService {

  constructor(app) {
    super(app);
    this.employee = app.$dbs.primary.employee;
  }

  async create(req, res) {
    let data = await this.employee.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.employee.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.employee.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.employee.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.employee.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.employee.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.employee.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.employee.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.employee.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.employee.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.employee.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.employee.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.employee.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.employee.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.employee.delb(req.body);
    return data;
  }

}

module.exports = EmployeeService;