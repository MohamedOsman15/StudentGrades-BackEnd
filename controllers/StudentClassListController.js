const { Student, Class, StudentClassLists,sequelize } = require('./models')


const getOneStudentListWithGrades = async () => {
  try {
    const list = await Student.findAll({where: {
      id: req.params.id,
    },
      include: [
        {
          model: MediumArticle,
          as: 'reading_list',
          through: { attributes: [] }
        }
      ]
    })
    stringify(list)
  } catch (error) {
    console.log(error)
  }
}