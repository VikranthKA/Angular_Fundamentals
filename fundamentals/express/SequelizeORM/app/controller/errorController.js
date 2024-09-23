const AppError = require("../../utils/appError");

const sendErrorDev = (error,res)=>{
    const statusCode = error.statusCode || 500;
    const status = error.status || 'error';
    const message = error.message;
    const stack = error.stack;

    return res.status(statusCode).json({
        status,
        message,
        stack
    })
}

const sendErrorProd = (error,res)=>{
    const statusCode = error.statusCode || 500;
    const status = error.status || 'error';
    const message = error.message;
    const stack = error.stack;

    if(error.isOperational){
        return res.status(statusCode).json({
            status,
            message,
        })

    }
    return res.status(500).json({
        status:'error',
        message:"Something went wrong on our side",
    })

}

const globalErrorHandler = (err,req,res,next)=>{

    // let error = '';
    // if(err.code === 500){
    //     error = new AppError()
    // }
    if(err.name === 'SequelizeValidationError'){
        err = new AppError(err.errors[0].message,400);

    }
    if(err.name==='SequelizeUniqueConstraintError'){
        err = new AppError(err.errors[0].message,400);
    }
    if(process.env.NODE_ENV==='development'){
        return sendErrorDev(err,res)
    }
    return sendErrorProd(err,res)
}

module.exports  = globalErrorHandler