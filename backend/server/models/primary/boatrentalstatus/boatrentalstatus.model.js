const {
  BaseModelSql
} = require('xc-data-mapper');

class boatrentalstatus extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./boatrentalstatus.meta.js')
    });

  }

}


module.exports = boatrentalstatus;