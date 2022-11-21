const { Student, Class, StudentClassLists, sequelize } = require('./models')

const getOneStudentListWithGrades = async () => {
  try {
    const list = await Student.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Class,
          as: 'class_list',
          through: {}
        }
      ]
    })
    stringify(list)
  } catch (error) {
    console.log(error)
  }
}
