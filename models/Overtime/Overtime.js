module.exports = (sequelize, DataTypes) => {
    const Overtime = sequelize.define(
    "overtime",
       {
          Overtime_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
         Employee_Id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
         
          Overtime_Name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Rate: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: false,
          },
        },
        {
          updatedAt: false,
        }
  );
  
  return Overtime;
  };