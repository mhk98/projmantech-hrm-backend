module.exports = (sequelize, DataTypes) => {
    const Resignation  = sequelize.define(
    "resignation",
       {
          Resignation_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Resigning_Employee: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Notice_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
        
          Resignation_Date: {
            type: DataTypes.DATE,
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
  
  return Resignation;
  };