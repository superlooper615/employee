const {
  BaseModelSql
} = require('xc-data-mapper');

class boatstatusschedule extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./boatstatusschedule.meta.js')
    });

  }

}


module.exports = boatstatusschedule;