module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    "payments",
    {
      Payment_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Invoice_Id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      Payment_Type: {
        type: DataTypes.ENUM("Cash", "Net-Banking", "Check"),
        defaultValue: "Cash",
      },
      Account_No: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Paid_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Paid_Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      updatedAt: true,
    }
  );

  return Payments;
};