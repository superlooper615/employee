const {
  BaseModelSql
} = require('xc-data-mapper');

class employee extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./employee.meta.js')
    });

  }

}


module.exports = employee;