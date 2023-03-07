module.exports = (sequelize, DataTypes) => {
  const Employee_BankInfo = sequelize.define(
    "employeeBI",
    {

      Employee_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Bank_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Bank_AccountNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      IFSC_Code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PAN_No: {
        type: DataTypes.STRING,
        allowNull: true,

      },


    },
    {
      updatedAt: false,
    }
  );

  return Employee_BankInfo;
};
