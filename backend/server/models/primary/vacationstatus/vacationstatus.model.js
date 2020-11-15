const {
  BaseModelSql
} = require('xc-data-mapper');

class vacationstatus extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./vacationstatus.meta.js')
    });

  }

}


module.exports = vacationstatus;