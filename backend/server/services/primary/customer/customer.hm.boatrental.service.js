const {
  BaseService
} = require('xc-core');

class CustomerHmBoatrentalService extends BaseService {

  constructor(app) {
    super(app);
    this.customer = app.$dbs.primary.customer;
    this.boatrental = app.$dbs.primary.boatrental;
  }



  async read(req, res) {
    let data = await this.boatrental.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.boatrental.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.boatrental.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.boatrental.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.boatrental.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.boatrental.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.boatrental.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.customer.hasManyChildren({
      child: 'boatrental',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.customer.hasManyList({
      ...req.query,
      childs: `boatrental`
    })
  }

}

module.exports = CustomerHmBoatrentalService;