module.exports = (sequelize, DataTypes) => {
  const Taxes = sequelize.define(
    "taxes",
    {
      Taxes_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },


      Tax_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Tax_Percentage: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Taxes;
};