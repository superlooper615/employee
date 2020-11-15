const {
  BaseService
} = require('xc-core');

class EmployeescheduleBtEmployeeService extends BaseService {

  constructor(app) {
    super(app);
    this.employeeschedule = app.$dbs.primary.employeeschedule;
  }

  async belongsTo(req, res) {
    return await this.employeeschedule.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = EmployeescheduleBtEmployeeService;