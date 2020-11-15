const {
  BaseModelSql
} = require('xc-data-mapper');

class shift extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./shift.meta.js')
    });

  }

}


module.exports = shift;