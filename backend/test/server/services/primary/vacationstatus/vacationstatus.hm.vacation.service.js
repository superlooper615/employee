const {
  BaseService
} = require('xc-core');

class VacationstatusHmVacationService extends BaseService {

  constructor(app) {
    super(app);
    this.vacationstatus = app.$dbs.primary.vacationstatus;
    this.vacation = app.$dbs.primary.vacation;
  }



  async read(req, res) {
    let data = await this.vacation.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.vacation.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.vacation.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.vacation.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.vacation.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.vacation.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.vacation.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'vacationstatus',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.vacationstatus.hasManyChildren({
      child: 'vacation',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.vacationstatus.hasManyList({
      ...req.query,
      childs: `vacation`
    })
  }

}

module.exports = VacationstatusHmVacationService;