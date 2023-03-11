module.exports = (sequelize, DataTypes) => {
  const Deduction = sequelize.define(
    "deduction",
    {
      Deduction_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      Deduction_Month: {
        type: DataTypes.STRING,
        allowNull: true
      },

      Deduction_Reason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Unit_Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      // Employee_Id: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      Employee_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Deduction;
};
