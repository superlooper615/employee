module.exports = {
  tableName: 'boatstatusschedule',
  columns: [{
      columnName: 'boatStatusScheduleId',
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
    {
      columnName: 'boatId',
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
      columnName: 'boatStatusId',
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
      columnName: 'description',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
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
    "constraintName": "boatIdFK",
    "tableName": "boatstatusschedule",
    "columnName": "boatId",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "boat",
    "referencedColumnName": "boatId",
    "matchOption": "NONE",
    "updateRule": "NO ACTION",
    "deleteRule": "NO ACTION",
    "tableSchema": "diversitechnologies"
  }, {
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
  }, {
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
  }],
  dbType: 'mysql'
}