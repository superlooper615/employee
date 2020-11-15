const {
  BaseService
} = require('xc-core');

class UseraccountService extends BaseService {

  constructor(app) {
    super(app);
    this.useraccount = app.$dbs.primary.useraccount;
  }

  async create(req, res) {
    let data = await this.useraccount.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.useraccount.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.useraccount.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.useraccount.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.useraccount.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.useraccount.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.useraccount.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.useraccount.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.useraccount.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.useraccount.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.useraccount.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.useraccount.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.useraccount.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.useraccount.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.useraccount.delb(req.body);
    return data;
  }

}

module.exports = UseraccountService;