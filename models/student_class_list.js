'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentClassList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Class_List.init({
    studentId: {
      DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    },
    classId: {
      DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'classes',
        key: 'is'
      }
    },
    grade: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentClassList',
    modelName: 'student_class_lists',
  });
  return Student_Class_List;
};