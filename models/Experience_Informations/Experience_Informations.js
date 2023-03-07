module.exports = (sequelize, DataTypes) => {
    const Experience_Informations  = sequelize.define(
    "experience_informations",
       {
          Experience_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
          
          Company_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Location: {
              type: DataTypes.STRING,
              allowNull: true,
            },
          Job_Position: {
              type: DataTypes.STRING,
              allowNull: true,
              
           },
          Period_From: {
            type: DataTypes.DATE,
            allowNull: true,
          },
        
          Period_To: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  
  return Experience_Informations;
  };