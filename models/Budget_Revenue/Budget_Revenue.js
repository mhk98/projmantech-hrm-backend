module.exports = (sequelize, DataTypes) => {
    const Budget_Revenue = sequelize.define(
        "budget_revenue",
        {
            Revenue_Id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                
            },
            Revenue_Title: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            Amount: {
                type: DataTypes.DECIMAL(60, 10),
                allowNull: true,
            },

            Notes: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            Revenue_Date: {
                type: DataTypes.DATE,
                allowNull: true,
            },

            Category: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            Sub_Category: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            File: {
                type: DataTypes.BLOB,
                allowNull: true,
            },
        },
        {
            updatedAt: false,
        }
    );
    return Budget_Revenue;
};