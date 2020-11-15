const {
  BaseService
} = require('xc-core');

class BoatstatusscheduleBtScheduleService extends BaseService {

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

module.exports = BoatstatusscheduleBtScheduleService;