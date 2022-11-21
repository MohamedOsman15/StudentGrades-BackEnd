const { Student, Class, StudentClassList } = require('../models')
// const middleware = require('../middleware')
const { Model } = require('sequelize')
// const schedule_exhibit = require('../models/schedule_exhibit')

const GetAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const GetOneClass = async (req, res) => {
  try {
    const oneClass = await Class.findByPk(
      req.params.id 
    )
    console.log(`This is one class`, oneClass)
    res.send(oneClass)
  } catch (error) {
    throw error
  }
}

// const GetStudentClasses = async (req, res) => {
//   try {
//     const classes = await Class.findAll({
//       where: {
//         studentId: req.params.studentId
//       }
//     })
//     console.log(classes)
//     res.send(classes)
//   } catch (error) {
//     throw error
//   }
// }

const CreateClass = async (req, res) => {
  try {
    // let studentId = parseInt(req.params.student_Id)
    let classContent = {
      // studentId,
      ...req.body
    }
    let Class = await Class.create(classContent)
    res.send(classContent)
  } catch (error) {
    throw error
  }
}

const UpdateClass = async (req, res) => {
  try {
    let classId = parseInt(req.params.classId)
    let updatedClass = await Class.update(req.body, {
      where: { id: classId }
    })
    res.send(updatedClass)
  } catch (error) {
    throw error
  }
}

const DeleteClass = async (req, res) => {
  try {
    const deletedClass = parseInt(req.params.classId)
    await Class.destroy({ where: { id: deletedClass } })
    res.send({ message: `Deleted schedule with an id of ${deletedClass}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllClasses,
  // GetStudentClasses,
  GetOneClass,
  CreateClass,
  UpdateClass,
  DeleteClass
}
