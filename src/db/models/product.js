const DataTypes = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Product", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            }
        }
    }, {
        timestamps: false
    })
};