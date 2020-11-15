const {
  BaseService
} = require('xc-core');

class ScheduleHmEmployeescheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.schedule = app.$dbs.primary.schedule;
    this.employeeschedule = app.$dbs.primary.employeeschedule;
  }



  async read(req, res) {
    let data = await this.employeeschedule.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.employeeschedule.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.employeeschedule.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.employeeschedule.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.employeeschedule.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.employeeschedule.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.employeeschedule.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.schedule.hasManyChildren({
      child: 'employeeschedule',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.schedule.hasManyList({
      ...req.query,
      childs: `employeeschedule`
    })
  }

}

module.exports = ScheduleHmEmployeescheduleService;