module.exports = {
  tableName: 'vacationstatus',
  columns: [{
      columnName: 'vacationStatusId',
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
      columnName: 'vacationStatus',
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}