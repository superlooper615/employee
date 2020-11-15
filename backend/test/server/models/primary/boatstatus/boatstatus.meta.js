module.exports = {
  tableName: 'boatstatus',
  columns: [{
      columnName: 'boatStatusId',
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
      columnName: 'boatStatus',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "constraintName": "boatStatusId",
    "tableName": "boatstatusschedule",
    "columnName": "boatStatusId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "boatstatus",
    "referencedColumnName": "boatStatusId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  belongsTo: [],
  dbType: 'mysql'
}