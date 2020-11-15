const {
  BaseService
} = require('xc-core');

class ScheduleHmBoatstatusscheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.schedule = app.$dbs.primary.schedule;
    this.boatstatusschedule = app.$dbs.primary.boatstatusschedule;
  }



  async read(req, res) {
    let data = await this.boatstatusschedule.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.boatstatusschedule.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.boatstatusschedule.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.boatstatusschedule.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.boatstatusschedule.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.boatstatusschedule.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.boatstatusschedule.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'schedule',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.schedule.hasManyChildren({
      child: 'boatstatusschedule',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.schedule.hasManyList({
      ...req.query,
      childs: `boatstatusschedule`
    })
  }

}

module.exports = ScheduleHmBoatstatusscheduleService;