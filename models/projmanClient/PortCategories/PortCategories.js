module.exports = (sequelize, DataTypes) => {
    const PortCategories  = sequelize.define(
    "portcategories",
       {
          Category_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          },
          
          Category_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return PortCategories;
  };