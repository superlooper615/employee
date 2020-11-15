module.exports = {
  tableName: 'boatrental',
  columns: [{
      columnName: 'boatRentalId',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'boatRentalStatusId',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'boatId',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'employeeId',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'customerId',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'bookingDate',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'bookingTime',
      type: 'time',
      dataType: 'time',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'passengers',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'requestedCoolers',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'specialNotes',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "constraintName": "boatId",
    "tableName": "boatrental",
    "columnName": "boatId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "boat",
    "referencedColumnName": "boatId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "boatRentalStatusId",
    "tableName": "boatrental",
    "columnName": "boatRentalStatusId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "boatrentalstatus",
    "referencedColumnName": "boatRentalStatusId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "customerId",
    "tableName": "boatrental",
    "columnName": "customerId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "customer",
    "referencedColumnName": "customerId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "employeeId",
    "tableName": "boatrental",
    "columnName": "employeeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employee",
    "referencedColumnName": "employeeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  dbType: 'mysql'
}