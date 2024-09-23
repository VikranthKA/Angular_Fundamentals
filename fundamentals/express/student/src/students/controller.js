const pool = require("../../db")
const { updateStudentByIdQuery,deleteStudentByIdQuery,getStudentsQuery, getStudentByIdQuery ,checkEmailExistsQuery,addStudentQuery} = require("../students/queries")

//Get all students 

const getStudents = (req, res) => {
    pool.query(getStudentsQuery, (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json(error)
        } else {
            res.status(200).json(results.rows)
        }
    })
}


//Get one student
const getStudentById = (req, res) => {
    const  id  = parseInt(req.params.id)
    console.log(id,"id")
    pool.query(getStudentByIdQuery,[id] ,(error, result) => {
        if (error) {
            console.log(error)

        } else {
            res.status(200).json(result.rows)
        }
    })
}

const addStudent = (req,res)=>{
    const {name,email,age,dob} = req.body;

    //check if email exists

    pool.query(checkEmailExistsQuery,[email],(error,results)=>{
        if(!results.rows.length){
            res.send("Email already exists")
        }
        //add stu to db
        pool.query(addStudentQuery,[name,email,age,dob],(error,results)=>{
            if(error) return res.status(400).json(error);
            res.status(201).send("Student created successfully")
        })

    })


}


const deleteStudentById = (req,res)=>{
    const  id  = parseInt(req.params.id);
    console.log(id,"id")

    pool.query(getStudentByIdQuery,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exists in the database")
        }
        pool.query(deleteStudentByIdQuery,[id],(error,results)=>{
            console.log(results,"results")
            return res.send("Student data deleted successfully")
        })
    })


}

const updateStudentById=(req,res)=>{
    const  id  = parseInt(req.params.id);
    const {name} = req.body
    console.log(id,name,"id")

    pool.query(getStudentByIdQuery,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exists in the database")
        }
        pool.query(updateStudentByIdQuery,[name,id],(error,results)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }
            return res.status(200).send("Student data updated successfully")
        })
    })
}



module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudentById,
    updateStudentById
}