const {
  BaseModelSql
} = require('xc-data-mapper');

class boatrental extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./boatrental.meta.js')
    });

  }

}


module.exports = boatrental;