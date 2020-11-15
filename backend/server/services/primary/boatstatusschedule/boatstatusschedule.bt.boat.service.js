const {
  BaseService
} = require('xc-core');

class BoatstatusscheduleBtBoatService extends BaseService {

  constructor(app) {
    super(app);
    this.boatstatusschedule = app.$dbs.primary.boatstatusschedule;
  }

  async belongsTo(req, res) {
    return await this.boatstatusschedule.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = BoatstatusscheduleBtBoatService;