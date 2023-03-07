module.exports = (sequelize, DataTypes) => {
  const Estimates = sequelize.define(
    "estimates",
    {
      Estimate_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      Project_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Estimate_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Expiry_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Status: {
        type: DataTypes.STRING,
        defaultValue: "Pending",

      },
      Tax_Type: {
        type: DataTypes.STRING,
        allowNull: true,

      },
      Tax_Percentage: {
        type: DataTypes.INTEGER,
        allowNull: true,

      },
      Total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,

      },
      Tax: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,

      },
      Discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Grand_Total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      Other_Info: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Estimates;
};