const {
  BaseModelSql
} = require('xc-data-mapper');

class vacation extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./vacation.meta.js')
    });

  }

}


module.exports = vacation;