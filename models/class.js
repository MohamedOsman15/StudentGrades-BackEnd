'use strict'
const { Model, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.hasMany(models.Student, {
        as: 'enrolled_student',
        foreignKey: 'id'
      })
      Class.belongsToMany(models.Student, {
        as: 'classes',
        through: models.StudentClassList,
        foreignKey: 'classId'
      })
    }
  }

  Class.init(
    {
      className: DataTypes.STRING,
      gradeLevel: DataTypes.STRING,
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Class',
      tableName: 'classes'
    }
  )
  return Class
}
