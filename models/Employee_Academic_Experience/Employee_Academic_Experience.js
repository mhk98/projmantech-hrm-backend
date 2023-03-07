
module.exports = (sequelize, DataTypes) => {
    const Employee_Academic_Experience = sequelize.define(
    "employeeAE",
       {
          Employee_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
         
          Certificate: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Institution: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        
          Subject_or_Position: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Starting_Year: {
              type: DataTypes.DATE,
              allowNull: true,
              
            },
          End_Year: {
              type: DataTypes.DATE,
              allowNull: true,
              
            },
          
        },
        {
          updatedAt: false,
        }
  );
  
  return Employee_Academic_Experience;
  };