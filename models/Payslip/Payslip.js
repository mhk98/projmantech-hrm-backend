
module.exports = (sequelize, DataTypes) => {
  const Payslip = sequelize.define(
    "payslip",
    {
      Payslip_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      Basic_Salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      Conveyance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      House_Rent_Allowence: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Other_Allowence: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Payslip;
};