'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //   Student.hasMany(models.Class, {
      //     as: 'current_class',
      //     foreignKey: 'studentId'
      // })
      //   Student.belongsToMany(models.StudentClassList, {
      //     as: 'class_list',
      //     through: models.StudentClassList,
      //     foreignKey: 'studentId'
      //   })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      schoolId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
