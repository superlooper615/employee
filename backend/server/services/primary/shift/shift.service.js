const {
  BaseService
} = require('xc-core');

class ShiftService extends BaseService {

  constructor(app) {
    super(app);
    this.shift = app.$dbs.primary.shift;
  }

  async create(req, res) {
    let data = await this.shift.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.shift.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.shift.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.shift.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.shift.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.shift.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.shift.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.shift.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.shift.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.shift.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.shift.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.shift.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.shift.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.shift.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.shift.delb(req.body);
    return data;
  }

}

module.exports = ShiftService;