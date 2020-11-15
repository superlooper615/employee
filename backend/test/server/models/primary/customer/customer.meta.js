module.exports = {
  tableName: 'customer',
  columns: [{
      columnName: 'customerId',
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
      columnName: 'firstName',
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
    {
      columnName: 'lastName',
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
    {
      columnName: 'email',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'phone',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}