module.exports = (sequelize, DataTypes) => {
    const Department  = sequelize.define(
    "department",
       {
          Department_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Department_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return Department;
  };