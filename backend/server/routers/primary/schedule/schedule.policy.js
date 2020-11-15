module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/schedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/schedule/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/schedule/bulk': {
    post: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Has many routes and permissions */

  '/api/v1/schedule/has/boatstatusschedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/boatstatusschedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/boatstatusschedule/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/boatstatusschedule/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/boatstatusschedule/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/boatstatusschedule/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/schedule/has/employeeschedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/employeeschedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/employeeschedule/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/employeeschedule/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/employeeschedule/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/schedule/:parentId/employeeschedule/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */
  '/api/v1/schedule/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};