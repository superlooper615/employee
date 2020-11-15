const {
  BaseModelSql
} = require('xc-data-mapper');

class boatstatus extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./boatstatus.meta.js')
    });

  }

}


module.exports = boatstatus;