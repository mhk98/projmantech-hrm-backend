module.exports = (sequelize, DataTypes) => {
    const Policies = sequelize.define(
    "policies",
       {
          Policy_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
         Employee_Id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
         
         
          Policy_Name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          Department: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          Description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          Create_Date: {
            type: DataTypes.DATE,
            allowNull: false,
          },
         
        },
        {
          updatedAt: false,
        }
  );
  
  return Policies;
  };
  