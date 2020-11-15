const {
  BaseService
} = require('xc-core');

class BoatrentalService extends BaseService {

  constructor(app) {
    super(app);
    this.boatrental = app.$dbs.primary.boatrental;
  }

  async create(req, res) {
    let data = await this.boatrental.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.boatrental.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.boatrental.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.boatrental.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.boatrental.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.boatrental.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.boatrental.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.boatrental.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.boatrental.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.boatrental.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.boatrental.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.boatrental.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.boatrental.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.boatrental.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.boatrental.delb(req.body);
    return data;
  }

}

module.exports = BoatrentalService;