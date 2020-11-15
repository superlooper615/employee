module.exports = {
  tableName: 'vacationtype',
  columns: [{
      columnName: 'vacationTypeId',
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
      columnName: 'vacationType',
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
  belongsTo: [],
  dbType: 'mysql'
}