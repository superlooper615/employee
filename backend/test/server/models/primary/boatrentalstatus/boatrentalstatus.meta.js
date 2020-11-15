module.exports = {
  tableName: 'boatrentalstatus',
  columns: [{
      columnName: 'boatRentalStatusId',
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
      columnName: 'boatRentalStatus',
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}