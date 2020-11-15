const {
  BaseService
} = require('xc-core');

class EmployeeHmBoatrentalService extends BaseService {

  constructor(app) {
    super(app);
    this.employee = app.$dbs.primary.employee;
    this.boatrental = app.$dbs.primary.boatrental;
  }



  async read(req, res) {
    let data = await this.boatrental.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.boatrental.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.boatrental.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.boatrental.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.boatrental.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.boatrental.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.boatrental.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.employee.hasManyChildren({
      child: 'boatrental',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.employee.hasManyList({
      ...req.query,
      childs: `boatrental`
    })
  }

}

module.exports = EmployeeHmBoatrentalService;