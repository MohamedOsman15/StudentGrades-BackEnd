const { Students, Classes } = require('../models')
const middleware = require('../middleware')
const { Model } = require('sequelize')
const schedule_exhibit = require('../models/schedule_exhibit')

const GetSchedule = async (req, res) => {
  try {
    const classes = await Classes.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const GetOneClass = async (req, res) => {
  try {
    const Class = await Classes.findByPk({
      where: { schedule_Id: req.params.schedule_Id }
    })
    console.log(`This is one class`, Class) 
    res.send(Class)
  } catch (error) {
    throw error
  }
}

const GetStudentClasses = async (req, res) => {
  try {
    const schedules = await Classes.findAll({
      where: {
        student_Id: req.params.id
      }
    })
    console.log(classes)
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const CreateClass = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_Id)
    let classContent = {
      studentId,
      ...req.body
    }
    let Class = await Classes.create(classContent)
    res.send(schedule)
  } catch (error) {
    throw error
  }
}

const UpdateClass = async (req, res) => {
  try {
    let classId = parseInt(req.params.cclass_Id)
    let newClass = await Class.update(req.body, {
      where: { id: classId }
    })
    res.send(newClass)
  } catch (error) {
    throw error
  }
}

const DeleteClass = async (req, res) => {
  try {
    const deletedClass = parseInt(req.params.class_Id)
    await Classes.destroy({ where: { id: deletedClass } })
    res.send({ message: `Deleted schedule with an id of ${deletedClass}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetClass,
  GetOneClass,
  GetStudentClasses,
  CreateClass,
  UpdateClass,
  DeleteClass
}