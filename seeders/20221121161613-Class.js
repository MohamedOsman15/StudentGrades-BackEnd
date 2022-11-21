'use strict'

// /** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let classes = [...Array(10)].map((_, idx) => ({
      className: falso.randJobType(),
      gradeLevel: falso.randNumber({ min: 9, max: 12 }),
      studentId: falso.randNumber({ min: 1, max: 50 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('classes', classes)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('classes')
  }
}
