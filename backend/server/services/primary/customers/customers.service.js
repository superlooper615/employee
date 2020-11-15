const {
  BaseService
} = require('xc-core');

class CustomersService extends BaseService {

  constructor(app) {
    super(app);
    this.customers = app.$dbs.primary.customers;
  }

  async create(req, res) {
    let data = await this.customers.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.customers.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.customers.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.customers.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.customers.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.customers.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.customers.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.customers.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.customers.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.customers.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.customers.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.customers.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.customers.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.customers.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.customers.delb(req.body);
    return data;
  }

}

module.exports = CustomersService;