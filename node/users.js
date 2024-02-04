const { DataTypes } = require('sequelize');

const userModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        PrimaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
}

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define('user', userModel)
    },

    createUser:(user)=>{
        return this.model.create(user)
    }
}

