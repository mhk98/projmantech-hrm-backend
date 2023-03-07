module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "categories",
    {
      Category_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Category_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Sub_Category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return Categories;
};