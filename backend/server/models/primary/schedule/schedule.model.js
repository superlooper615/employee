const {
  BaseModelSql
} = require('xc-data-mapper');

class schedule extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./schedule.meta.js')
    });

  }

}


module.exports = schedule;