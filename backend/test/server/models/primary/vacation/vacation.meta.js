module.exports = {
  tableName: 'vacation',
  columns: [{
      columnName: 'vacationId',
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
      columnName: 'vacationTypeId',
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
      columnName: 'vacationStatusId',
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
      columnName: 'vacationStartDate',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'vacationEndDate',
      type: 'date',
      dataType: 'date',
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
    "constraintName": "employeeIdFK",
    "tableName": "vacation",
    "columnName": "employeeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employee",
    "referencedColumnName": "employeeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "vacationStatusId",
    "tableName": "vacation",
    "columnName": "vacationStatusId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "vacationstatus",
    "referencedColumnName": "vacationStatusId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "vacationTypeId",
    "tableName": "vacation",
    "columnName": "vacationTypeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "vacationtype",
    "referencedColumnName": "vacationTypeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  dbType: 'mysql'
}