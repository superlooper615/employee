module.exports = {
  tableName: 'employeeschedule',
  columns: [{
      columnName: 'employeescheduleId',
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
      columnName: 'scheduleId',
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "constraintName": "employeeIdemployeeSchedule",
    "tableName": "employeeschedule",
    "columnName": "employeeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employee",
    "referencedColumnName": "employeeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
    "constraintName": "scheduleIdemployeeSchedule",
    "tableName": "employeeschedule",
    "columnName": "scheduleId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "schedule",
    "referencedColumnName": "scheduleId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  dbType: 'mysql'
}