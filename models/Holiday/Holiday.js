module.exports = (sequelize, DataTypes) => {
    const Holiday  = sequelize.define(
    "holiday",
       {
          Holiday_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Holiday_Name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          Holiday_Date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return Holiday;
  };