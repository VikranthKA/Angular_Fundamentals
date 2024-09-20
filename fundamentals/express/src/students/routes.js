const {Router} = require('express')
const controller = require("./controller")
const rotuer = Router()


rotuer.get('/',controller.getStudents)
rotuer.get('/:id',controller.getStudentById)
rotuer.post("/",controller.addStudent)
rotuer.delete('/:id',controller.deleteStudentById)
rotuer.put('/:id',controller.updateStudentById)





module.exports = rotuer