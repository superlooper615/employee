const {
  BaseModelSql
} = require('xc-data-mapper');

class useraccount extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./useraccount.meta.js')
    });

  }

}


module.exports = useraccount;