const {
  BaseModelSql
} = require('xc-data-mapper');

class vacationtype extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./vacationtype.meta.js')
    });

  }

}


module.exports = vacationtype;