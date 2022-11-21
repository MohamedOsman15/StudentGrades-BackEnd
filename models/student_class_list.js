'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentClassList extends Model {
    static associate(models) {}
  }
  StudentClassList.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
      },
      classId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'classes',
          key: 'is'
        }
      },
      grade: DataTypes.STRING,
      score: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'StudentClassList',
      tableName: 'student_class_lists'
    }
  )
  return StudentClassList
}
