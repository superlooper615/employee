const {
  BaseService
} = require('xc-core');

class EmployeeBtEmployeetypeService extends BaseService {

  constructor(app) {
    super(app);
    this.employee = app.$dbs.primary.employee;
  }

  async belongsTo(req, res) {
    return await this.employee.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = EmployeeBtEmployeetypeService;