const {
  BaseModelSql
} = require('xc-data-mapper');

class customers extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./customers.meta.js')
    });

  }

}


module.exports = customers;