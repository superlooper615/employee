const {
  BaseModelSql
} = require('xc-data-mapper');

class boat extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./boat.meta.js')
    });

  }

}


module.exports = boat;