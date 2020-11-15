const {
  BaseService
} = require('xc-core');

class ScheduleBtShiftService extends BaseService {

  constructor(app) {
    super(app);
    this.schedule = app.$dbs.primary.schedule;
  }

  async belongsTo(req, res) {
    return await this.schedule.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = ScheduleBtShiftService;