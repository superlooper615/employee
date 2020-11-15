const {
  BaseService
} = require('xc-core');

class VacationBtVacationtypeService extends BaseService {

  constructor(app) {
    super(app);
    this.vacation = app.$dbs.primary.vacation;
  }

  async belongsTo(req, res) {
    return await this.vacation.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = VacationBtVacationtypeService;