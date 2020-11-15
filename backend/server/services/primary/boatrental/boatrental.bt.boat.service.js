const {
  BaseService
} = require('xc-core');

class BoatrentalBtBoatService extends BaseService {

  constructor(app) {
    super(app);
    this.boatrental = app.$dbs.primary.boatrental;
  }

  async belongsTo(req, res) {
    return await this.boatrental.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = BoatrentalBtBoatService;