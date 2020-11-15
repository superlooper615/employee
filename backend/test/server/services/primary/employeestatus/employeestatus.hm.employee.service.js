const {
  BaseService
} = require('xc-core');

class EmployeestatusHmEmployeeService extends BaseService {

  constructor(app) {
    super(app);
    this.employeestatus = app.$dbs.primary.employeestatus;
    this.employee = app.$dbs.primary.employee;
  }



  async read(req, res) {
    let data = await this.employee.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.employee.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.employee.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.employee.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.employee.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.employee.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.employee.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'employeestatus',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.employeestatus.hasManyChildren({
      child: 'employee',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.employeestatus.hasManyList({
      ...req.query,
      childs: `employee`
    })
  }

}

module.exports = EmployeestatusHmEmployeeService;