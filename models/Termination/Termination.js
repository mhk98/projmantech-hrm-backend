module.exports = (sequelize, DataTypes) => {
    const Termination  = sequelize.define(
    "termination",
       {
          Termination_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Terminated_Employee: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Notice_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
        
          Termination_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          Termination_Type: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Reason: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  
  return Termination;
  };