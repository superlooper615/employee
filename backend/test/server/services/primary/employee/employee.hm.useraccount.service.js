const {
  BaseService
} = require('xc-core');

class EmployeeHmUseraccountService extends BaseService {

  constructor(app) {
    super(app);
    this.employee = app.$dbs.primary.employee;
    this.useraccount = app.$dbs.primary.useraccount;
  }



  async read(req, res) {
    let data = await this.useraccount.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.useraccount.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.useraccount.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.useraccount.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.useraccount.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.useraccount.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.useraccount.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'employee',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.employee.hasManyChildren({
      child: 'useraccount',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.employee.hasManyList({
      ...req.query,
      childs: `useraccount`
    })
  }

}

module.exports = EmployeeHmUseraccountService;