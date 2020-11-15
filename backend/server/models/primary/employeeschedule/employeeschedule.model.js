const {
  BaseModelSql
} = require('xc-data-mapper');

class employeeschedule extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./employeeschedule.meta.js')
    });

  }

}


module.exports = employeeschedule;