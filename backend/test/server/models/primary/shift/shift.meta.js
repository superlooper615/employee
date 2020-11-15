module.exports = {
  tableName: 'shift',
  columns: [{
      columnName: 'shiftId',
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
      columnName: 'shift',
      type: 'time',
      dataType: 'time',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  belongsTo: [],
  dbType: 'mysql'
}