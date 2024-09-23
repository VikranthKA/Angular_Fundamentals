// https://youtu.be/QoLqMDSBZAs?si=ggISbGmxCbzkTzSx

const user = require("../../db/models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const catchAsync = require("../../../utils/cancelAsync")
const AppError = require("../../../utils/appError")

const genreateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN
    })
}

const signup = catchAsync(async (req, res, next) => {
    try {
        const body = req.body
        if (!['1', '2'].includes(body.userType)) {
            throw new AppError("Invalid user Type",400)
        }

        const newUser = await user.create({
            userType: body.userType,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword
        })
        
        if (!newUser) {
            return res.status(400).json({
                message: "Failed to create the user",
            })
        
        }

        const result = newUser.toJSON()

        delete result.password;
        delete result.deletedAt;

        result.token = genreateToken({
            id: result.id
        })



        return res.status(201).json({
            message: "New user is created",
            data: result
        })
    } catch (error) {

        return res.status(500).json({
            message: "Error in the catch",
            error
        })
    }


})


const signin = catchAsync(async (req, res, next) => {

    try {


        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "Give email and password",
            })

        }

        const result = await user.findOne({ where: { email } })
        if (!result || !(await bcrypt.compare(password, result.password))) {
            return res.status(400).json({
                message: "Incorrect email or password",
            })
        }

        const token = genreateToken({
            id: result.id
        })

        return res.status(201).json({
            message: "Logged in successfully",
            data: token
        })



    } catch (error) {
        return res.status(500).json({
            message: "Error in the catch",
            error
        })
    }

})



module.exports = {
    signup,
    signin,
}

