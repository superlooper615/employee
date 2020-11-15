module.exports = {
  tableName: 'schedule',
  columns: [{
      columnName: 'scheduleId',
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
      columnName: 'scheduleDate',
      type: 'date',
      dataType: 'date',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'shiftId',
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
  hasMany: [{
    "constraintName": "scheduleId",
    "tableName": "boatstatusschedule",
    "columnName": "scheduleId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "schedule",
    "referencedColumnName": "scheduleId",
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
  belongsTo: [{
    "constraintName": "shiftId",
    "tableName": "schedule",
    "columnName": "shiftId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "shift",
    "referencedColumnName": "shiftId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  dbType: 'mysql'
}