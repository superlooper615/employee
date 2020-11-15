const {
  BaseModelSql
} = require('xc-data-mapper');

class employeetype extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./employeetype.meta.js')
    });

  }

}


module.exports = employeetype;