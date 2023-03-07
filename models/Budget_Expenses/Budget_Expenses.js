module.exports = (sequelize, DataTypes) => {
  const Budget_Expenses = sequelize.define(
    "budget_expense",
    {
      Expense_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
      },

      Amount: {
        type: DataTypes.DECIMAL(60, 10),
        allowNull: true,
      },

      Expense_Title: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Expense_Date: {
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
  return Budget_Expenses;
};