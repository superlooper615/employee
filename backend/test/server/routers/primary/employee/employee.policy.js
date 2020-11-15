module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/employee': {
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
  '/api/v1/employee/:id': {
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
  '/api/v1/employee/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/employee/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/employee/bulk': {
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

  '/api/v1/employee/has/boatrental': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/boatrental': {
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
  '/api/v1/employee/:parentId/boatrental/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/boatrental/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/boatrental/:id': {
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
  '/api/v1/employee/:parentId/boatrental/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/employee/has/employeeschedule': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/employeeschedule': {
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
  '/api/v1/employee/:parentId/employeeschedule/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/employeeschedule/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/employeeschedule/:id': {
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
  '/api/v1/employee/:parentId/employeeschedule/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/employee/has/vacation': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/vacation': {
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
  '/api/v1/employee/:parentId/vacation/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/vacation/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/vacation/:id': {
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
  '/api/v1/employee/:parentId/vacation/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/employee/has/useraccount': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/useraccount': {
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
  '/api/v1/employee/:parentId/useraccount/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/useraccount/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/:parentId/useraccount/:id': {
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
  '/api/v1/employee/:parentId/useraccount/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */
  '/api/v1/employee/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/employee/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};