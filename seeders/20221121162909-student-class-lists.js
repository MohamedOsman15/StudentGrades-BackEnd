'use strict'

// /** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let student_class_lists = [...Array(50)].map((_, idx) => ({
      studentId: falso.randNumber({ min: 1, max: 50 }),
      classId: falso.randNumber({ min: 1, max: 10 }),
      score: falso.randNumber({ min: 0, max: 4 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('student_class_lists', student_class_lists)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('student_class_lists')
  }
}
