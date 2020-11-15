const {
  BaseService
} = require('xc-core');

class BoatService extends BaseService {

  constructor(app) {
    super(app);
    this.boat = app.$dbs.primary.boat;
  }

  async create(req, res) {
    let data = await this.boat.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.boat.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.boat.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.boat.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.boat.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.boat.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.boat.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.boat.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.boat.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.boat.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.boat.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.boat.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.boat.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.boat.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.boat.delb(req.body);
    return data;
  }

}

module.exports = BoatService;