module.exports = {
  tableName: 'employeestatus',
  columns: [{
      columnName: 'employeeStatusId',
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
      columnName: 'employeeStatus',
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
    "constraintName": "employeeStatusId",
    "tableName": "employee",
    "columnName": "employeeStatusId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employeestatus",
    "referencedColumnName": "employeeStatusId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  belongsTo: [],
  dbType: 'mysql'
}