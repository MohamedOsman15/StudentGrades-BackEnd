'use strict'

// /** @type {import('sequelize-cli').Migration} */
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let students = [...Array(50)].map((_, idx) => ({
      name: falso.randFirstName(),
      email: falso.randEmail(),
      schoolId: idx+1,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('students', students)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students')
  }
}
