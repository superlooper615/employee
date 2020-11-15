module.exports = {
  tableName: 'employee',
  columns: [{
      columnName: 'employeeId',
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
    {
      columnName: 'address',
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
      columnName: 'employeeTypeId',
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
      columnName: 'employeeStatusId',
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
    "constraintName": "employeeId",
    "tableName": "boatrental",
    "columnName": "employeeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employee",
    "referencedColumnName": "employeeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
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
    "constraintName": "employeeIdFKuserAccount",
    "tableName": "useraccount",
    "columnName": "employeeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employee",
    "referencedColumnName": "employeeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  belongsTo: [{
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
  }, {
    "constraintName": "employeeTypeId",
    "tableName": "employee",
    "columnName": "employeeTypeId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "employeetype",
    "referencedColumnName": "employeeTypeId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }],
  dbType: 'mysql'
}