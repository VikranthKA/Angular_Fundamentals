const db_name = "students" //put in .env

const getStudentsQuery = `SELECT * FROM ${db_name}`;
// const getStudentByIdQuery = (id)=>`SELECT * FROM ${db_name} WHERE id=${id}`
const getStudentByIdQuery ="SELECT * FROM students WHERE id = $1";

const checkEmailExistsQuery = "SELECT s FROM students s WHERE s.email = $1";

const addStudentQuery = "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";

const deleteStudentByIdQuery = "DELETE FROM students WHERE id = $1";

const updateStudentByIdQuery = "UPDATE students SET name = $1 WHERE id = $2";

module.exports={
    getStudentsQuery,
    getStudentByIdQuery,
    checkEmailExistsQuery,
    addStudentQuery,
    deleteStudentByIdQuery,
    updateStudentByIdQuery
}