
module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define("items", {


        Items_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        Item_Name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Discription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Unit_Cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },

        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,

        },

    },
        {
            updatedAt: false,
        }

    );

    return Items;
};
