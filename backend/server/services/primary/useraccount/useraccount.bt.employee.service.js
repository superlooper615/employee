const {
  BaseService
} = require('xc-core');

class UseraccountBtEmployeeService extends BaseService {

  constructor(app) {
    super(app);
    this.useraccount = app.$dbs.primary.useraccount;
  }

  async belongsTo(req, res) {
    return await this.useraccount.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = UseraccountBtEmployeeService;