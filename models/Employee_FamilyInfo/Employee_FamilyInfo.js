module.exports = (sequelize, DataTypes) => {
    const Employee_FamilyInfo = sequelize.define(
    "employeeFI",
       {
          Employee_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
         
          Contact_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Relationship: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        
          Date_of_Birth: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          Phone1: {
              type: DataTypes.STRING,
              allowNull: true,
              Unique: true,
            },
          Phone2: {
              type: DataTypes.STRING,
              allowNull: true,
              Unique: true,
            },
          
        },
        {
          updatedAt: false,
        }
  );
  
  return Employee_FamilyInfo;
  };
  