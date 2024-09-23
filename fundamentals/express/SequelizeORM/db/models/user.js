'use strict';
const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
const bcrypt = require('bcrypt');
const AppError = require('../../utils/appError');


module.exports = sequelize.define('user',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userType: {
        type: DataTypes.ENUM('0','1','2'),
        allowNull:false,
        validate:{
          notNull:{
            msg:"userType cannot be null"
          },
          notEmpty:{
            msg:"userTpe cannot be empty"
          }
        }
      },
      firstName: {
        type: DataTypes.STRING,        allowNull:false,
        validate:{
          notNull:{
            msg:"firstName cannot be null"
          },
          notEmpty:{
            msg:"firstName cannot be empty"
          }
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
          notNull:{
            msg:"lastName cannot be null"
          },
          notEmpty:{
            msg:"lastName cannot be empty"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
          notNull:{
            msg:"email cannot be null"
          },
          notEmpty:{
            msg:"email cannot be empty"
          },
          isEmail:{
            msg:"Invalid Email"
          }
        }
      },
      password: {
        type: DataTypes.STRING,        allowNull:false,
        validate:{
          notNull:{
            msg:"password cannot be null"
          },
          notEmpty:{
            msg:"password cannot be empty"
          }
        }
      },
      confirmPassword: {
        type: DataTypes.VIRTUAL,
        set(value){
          if(this.password.length < 3){
            throw new AppError('Password cannot be lessthan 3 letters',400)
          }
          if(value===this.password){
            const hashPassword  = bcrypt.hashSync(value,10);
            this.setDataValue('password',hashPassword)
          }else{
            throw new AppError(
              'Password and Confirm password must be the same',400
            )
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt:{
        type: DataTypes.DATE
      }

},{
  paranoid:true,
  freezeTableName:true,
  modelName:'user'


})

















// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   user.init({
//     userType: DataTypes.ENUM,
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return user;
// };