const {
  BaseService
} = require('xc-core');

class BoatHmBoatstatusscheduleService extends BaseService {

  constructor(app) {
    super(app);
    this.boat = app.$dbs.primary.boat;
    this.boatstatusschedule = app.$dbs.primary.boatstatusschedule;
  }



  async read(req, res) {
    let data = await this.boatstatusschedule.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.boatstatusschedule.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.boatstatusschedule.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.boatstatusschedule.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.boatstatusschedule.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.boatstatusschedule.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.boatstatusschedule.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'boat',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.boat.hasManyChildren({
      child: 'boatstatusschedule',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.boat.hasManyList({
      ...req.query,
      childs: `boatstatusschedule`
    })
  }

}

module.exports = BoatHmBoatstatusscheduleService;