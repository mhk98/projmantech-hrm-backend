module.exports = (sequelize, DataTypes) => {
    const Employee_Provident_Fund = sequelize.define(
    "providentFund",
       {
          Provident_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
         Employee_Id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
         
          Provident_Fund_Type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Employee_Share: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: false,
          },
        
          Organization_Share: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: false,
          },
          Status: {
              type: DataTypes.STRING,
              allowNull: true,
            },
        },
        {
          updatedAt: false,
        }
  );
  
  return Employee_Provident_Fund;
  };