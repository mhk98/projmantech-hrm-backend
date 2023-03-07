module.exports = (sequelize, DataTypes) => {
    const Promotion  = sequelize.define(
    "promotion",
       {
          Promotion_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Promoted_Employee: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Promoted_From: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        
          Promoted_to: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Promotion_Date: {
              type: DataTypes.DATE,
              allowNull: true,
              
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
  
  return Promotion;
  };