module.exports = (sequelize, DataTypes) => {
  const Expenses = sequelize.define(
    "expenses",
    {
      Item_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Item_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Purchase_From: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Purchase_Date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      Employee_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Paid_By: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return Expenses;
};