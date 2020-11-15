const {
  BaseService
} = require('xc-core');

class ShiftHmScheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.shift = app.$dbs.primary.shift;
    this.schedule = app.$dbs.primary.schedule;
  }



  async read(req, res) {
    let data = await this.schedule.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.schedule.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.schedule.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.schedule.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.schedule.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.schedule.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.schedule.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'shift',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.shift.hasManyChildren({
      child: 'schedule',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.shift.hasManyList({
      ...req.query,
      childs: `schedule`
    })
  }

}

module.exports = ShiftHmScheduleService;