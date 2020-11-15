const {
  BaseModelSql
} = require('xc-data-mapper');

class employeestatus extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./employeestatus.meta.js')
    });

  }

}


module.exports = employeestatus;